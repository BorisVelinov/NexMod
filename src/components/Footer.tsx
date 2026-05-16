import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-nova-grey-light pt-20 pb-10">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-16">
          
          {/* Brand Info & Newsletter */}
          <div className="max-w-md">
            <h3 className="text-2xl font-bold tracking-tight text-nova-black mb-4">
              NovaCore
            </h3>
            <p className="text-nova-grey text-sm mb-6">
              The world&apos;s first smart performance case.
            </p>
            
            <div className="space-y-3">
              <p className="text-sm font-medium text-nova-black">Stay in the loop.</p>
              <form className="flex gap-2 relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white border border-nova-black/10 rounded-full px-5 py-3 text-sm outline-none transition-all focus:border-nova-orange focus:ring-1 focus:ring-nova-orange/50"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 aspect-square bg-nova-black text-white rounded-full flex items-center justify-center hover:bg-nova-orange transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 w-full lg:w-auto">
             <div>
               <h4 className="font-semibold text-nova-black mb-4 text-sm">Product</h4>
               <ul className="space-y-3">
                 <li><Link href="#" className="text-sm text-nova-grey hover:text-nova-black transition-colors">Performance Case</Link></li>
                 <li><Link href="#" className="text-sm text-nova-grey hover:text-nova-black transition-colors">Storage Case</Link></li>
                 <li><Link href="#" className="text-sm text-nova-grey hover:text-nova-black transition-colors">Lite Case</Link></li>
               </ul>
             </div>
             <div>
               <h4 className="font-semibold text-nova-black mb-4 text-sm">Company</h4>
               <ul className="space-y-3">
                 <li><Link href="#" className="text-sm text-nova-grey hover:text-nova-black transition-colors">About</Link></li>
                 <li><Link href="#" className="text-sm text-nova-grey hover:text-nova-black transition-colors">Newsroom</Link></li>
                 <li><Link href="#" className="text-sm text-nova-grey hover:text-nova-black transition-colors">Careers</Link></li>
               </ul>
             </div>
             <div>
               <h4 className="font-semibold text-nova-black mb-4 text-sm">Legal</h4>
               <ul className="space-y-3">
                 <li><Link href="#" className="text-sm text-nova-grey hover:text-nova-black transition-colors">Privacy</Link></li>
                 <li><Link href="#" className="text-sm text-nova-grey hover:text-nova-black transition-colors">Terms</Link></li>
               </ul>
             </div>
          </div>
        </div>

        <div className="divider-subtle mb-8" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-nova-grey">
          <p>© {new Date().getFullYear()} NovaCore Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-nova-black transition-colors">Twitter (X)</Link>
            <Link href="#" className="hover:text-nova-black transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
