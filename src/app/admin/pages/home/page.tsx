import { Save } from "lucide-react";

export default function AdminHomePageEditor() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-heading font-bold text-text-heading mb-2">Edit Home Page Content</h1>
        <p className="text-text-muted">Modify the static text content of the landing page sections.</p>
      </div>

      <div className="bg-surface rounded-2xl shadow-sm border border-border p-6 md:p-8 space-y-8">
        
        {/* Hero Section Edit */}
        <div id="hero" className="space-y-4">
          <h2 className="text-xl font-heading font-bold text-text-heading border-b border-border pb-2">Hero Section</h2>
          
          <div>
            <label className="block text-sm font-semibold text-text-heading mb-1">Headline</label>
            <input 
              type="text" 
              defaultValue="Get Enlightened to Serve the Humanity"
              className="w-full px-4 py-2.5 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-heading mb-1">Subheadline</label>
            <textarea 
              rows={2}
              defaultValue="Netpro Model School & College, Bogra, is dedicated to nurturing nobility, enlightenment, and truthfulness in every student."
              className="w-full px-4 py-2.5 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
            />
          </div>
        </div>

        {/* Chairman Message Edit */}
        <div id="chairman" className="space-y-4 pt-4 border-t border-border">
          <h2 className="text-xl font-heading font-bold text-text-heading border-b border-border pb-2">Chairman&apos;s Message</h2>
          
          <div>
            <label className="block text-sm font-semibold text-text-heading mb-1">Name</label>
            <input 
              type="text" 
              defaultValue="A K M Mejanur Islam"
              className="w-full px-4 py-2.5 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-heading mb-1">Message Quote</label>
            <textarea 
              rows={4}
              defaultValue='&quot;Knowledge, humanity, and skill development are the core foundations of education. Only true education can create enlightened human beings. At Netpro Model School &amp; College, we provide a disciplined and modern environment to prepare students for the future.&quot;'
              className="w-full px-4 py-2.5 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
            />
          </div>
        </div>

        {/* Principal Message Edit */}
        <div id="principal" className="space-y-4 pt-4 border-t border-border">
          <h2 className="text-xl font-heading font-bold text-text-heading border-b border-border pb-2">Principal&apos;s Message</h2>
          
          <div>
            <label className="block text-sm font-semibold text-text-heading mb-1">Name</label>
            <input 
              type="text" 
              defaultValue="Riya Sharmin"
              className="w-full px-4 py-2.5 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-heading mb-1">Message Quote</label>
            <textarea 
              rows={4}
              defaultValue='&quot;In a changing world, education is the main ladder for an individual to reach their peak. At Netpro Model School &amp; College, our joyful and disciplined environment ensures students develop into people with right values and the courage to face global challenges.&quot;'
              className="w-full px-4 py-2.5 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
            />
          </div>
        </div>

        <div className="pt-6 border-t border-border flex justify-end">
          <button className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold shadow-md transition-colors">
            <Save size={18} />
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}
