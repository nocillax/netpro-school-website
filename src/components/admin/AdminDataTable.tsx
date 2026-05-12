"use client";

import { useState, useEffect } from "react";
import { Search, Plus, Edit2, Trash2, X, CheckSquare, Square } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface TableItem {
  id: string;
  title: string;
  date: string;
  isPinned?: boolean;
  [key: string]: string | boolean | undefined;
}

interface AdminDataTableProps {
  title: string;
  items: TableItem[];
  type: "event" | "notice";
}

export default function AdminDataTable({ title, items: initialItems, type }: AdminDataTableProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [items, setItems] = useState(initialItems);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<TableItem | null>(null);

  const handleEdit = (item: TableItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  // Check if we came from an edit button deep link
  useEffect(() => {
    const editId = searchParams.get("edit");
    if (editId) {
      const itemToEdit = items.find((i) => i.id === editId);
      if (itemToEdit) {
        // Use a timeout to avoid synchronous state update in effect
        const timer = setTimeout(() => handleEdit(itemToEdit), 0);
        return () => clearTimeout(timer);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]); // We purposefully remove `items` to prevent reopening when saving.

  const closeModal = () => {
    setIsModalOpen(false);
    if (searchParams.has("edit")) {
      router.replace(pathname);
    }
  };

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (id: string) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedIds(newSet);
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === filteredItems.length) setSelectedIds(new Set());
    else setSelectedIds(new Set(filteredItems.map(i => i.id)));
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter(i => i.id !== id));
      const newSet = new Set(selectedIds);
      newSet.delete(id);
      setSelectedIds(newSet);
    }
  };

  const handleBatchDelete = () => {
    if (selectedIds.size === 0) return;
    if (confirm(`Are you sure you want to delete ${selectedIds.size} items?`)) {
      setItems(items.filter(i => !selectedIds.has(i.id)));
      setSelectedIds(new Set());
    }
  };

  const handleCreate = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const date = formData.get("date") as string;
    const isPinned = formData.get("isPinned") === "on";

    if (editingItem) {
      // Update
      setItems(items.map(i => i.id === editingItem.id ? { ...i, title, date, isPinned } : i));
    } else {
      // Create Mock
      const newItem: TableItem = {
        id: Math.random().toString(36).substr(2, 9),
        title,
        date,
        isPinned,
        excerpt: "This is a mock excerpt...",
      };
      setItems([newItem, ...items]);
    }
    closeModal();
  };

  return (
    <div className="bg-surface rounded-2xl shadow-sm border border-border overflow-hidden">
      {/* Toolbar */}
      <div className="p-4 md:p-6 border-b border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-xl font-heading font-bold text-text-heading">{title}</h2>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-surface-alt border border-border rounded-lg text-sm focus:outline-none focus:border-primary-400"
            />
          </div>
          
          {selectedIds.size > 0 && (
            <button 
              onClick={handleBatchDelete}
              className="flex items-center gap-2 px-4 py-2 bg-accent-50 text-accent-600 rounded-lg text-sm font-semibold hover:bg-accent-100 transition-colors shrink-0"
            >
              <Trash2 size={16} />
              Delete ({selectedIds.size})
            </button>
          )}

          <button 
            onClick={handleCreate}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors shrink-0"
          >
            <Plus size={16} />
            Create
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-alt border-b border-border text-sm text-text-muted">
              <th className="p-4 w-12 text-center cursor-pointer" onClick={toggleSelectAll}>
                {selectedIds.size === filteredItems.length && filteredItems.length > 0 ? (
                  <CheckSquare size={18} className="text-primary-600" />
                ) : (
                  <Square size={18} />
                )}
              </th>
              <th className="p-4 font-semibold">Title</th>
              <th className="p-4 font-semibold w-32">Date</th>
              <th className="p-4 font-semibold w-24">Status</th>
              <th className="p-4 font-semibold w-24 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id} className="border-b border-border hover:bg-surface-alt/50 transition-colors group">
                <td className="p-4 text-center cursor-pointer text-text-muted" onClick={() => toggleSelect(item.id)}>
                  {selectedIds.has(item.id) ? (
                    <CheckSquare size={18} className="text-primary-600" />
                  ) : (
                    <Square size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </td>
                <td className="p-4">
                  <p className="font-semibold text-text-heading line-clamp-1">{item.title}</p>
                  <p className="text-xs text-text-muted line-clamp-1 mt-0.5">{item.excerpt}</p>
                </td>
                <td className="p-4 text-sm font-medium text-text-body whitespace-nowrap">{item.date}</td>
                <td className="p-4">
                  {item.isPinned ? (
                    <span className="px-2 py-1 bg-accent-50 text-accent-600 text-[10px] font-bold uppercase rounded-md">Pinned</span>
                  ) : (
                    <span className="px-2 py-1 bg-surface-alt border border-border text-text-muted text-[10px] font-bold uppercase rounded-md">Standard</span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => handleEdit(item)} className="p-2 text-text-muted hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50">
                      <Edit2 size={16} />
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="p-2 text-text-muted hover:text-accent-600 transition-colors rounded-lg hover:bg-accent-50">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredItems.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-muted">
                  No items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit/Create Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-surface w-full max-w-lg rounded-2xl shadow-xl overflow-hidden animate-fade-in">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="font-heading font-bold text-xl text-text-heading">
                {editingItem ? `Edit ${type === 'event' ? 'Event' : 'Notice'}` : `Create New ${type === 'event' ? 'Event' : 'Notice'}`}
              </h3>
              <button onClick={closeModal} className="text-text-muted hover:text-text-heading p-1">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text-heading mb-1">Title</label>
                <input 
                  name="title"
                  type="text" 
                  defaultValue={editingItem?.title || ""}
                  required
                  className="w-full px-4 py-2.5 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-text-heading mb-1">Date</label>
                <input 
                  name="date"
                  type="date" 
                  defaultValue={editingItem?.date || ""}
                  required
                  className="w-full px-4 py-2.5 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>

              {type === 'event' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-heading mb-1">Time (Event Only)</label>
                    <input 
                      name="time"
                      type="text" 
                      defaultValue={String(editingItem?.time || "")}
                      className="w-full px-4 py-2.5 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-heading mb-1">Location</label>
                    <input 
                      name="location"
                      type="text" 
                      defaultValue={String(editingItem?.location || "")}
                      className="w-full px-4 py-2.5 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-text-heading mb-1">Excerpt / Content</label>
                <textarea 
                  name="excerpt"
                  rows={4}
                  defaultValue={String(editingItem?.excerpt || "")}
                  className="w-full px-4 py-2.5 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input 
                  type="checkbox" 
                  id="isPinned"
                  name="isPinned"
                  defaultChecked={editingItem?.isPinned || false}
                  className="w-4 h-4 text-primary-600 rounded border-border focus:ring-primary-500"
                />
                <label htmlFor="isPinned" className="text-sm font-medium text-text-heading">
                  Pin to top / Mark as Important
                </label>
              </div>

              <div className="pt-6 flex items-center justify-end gap-3 border-t border-border mt-6">
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="px-5 py-2.5 text-text-muted hover:text-text-heading font-medium transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2.5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 shadow-md transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
