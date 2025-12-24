export const Footor = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-20 p-2">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-4 gap-8">

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Vidyalaya
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Learn smarter. Grow faster.  
              A modern platform for curious minds.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
              Resources
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="hover:text-slate-900 cursor-pointer">Courses</li>
              <li className="hover:text-slate-900 cursor-pointer">Tutorials</li>
              <li className="hover:text-slate-900 cursor-pointer">Practice</li>
              <li className="hover:text-slate-900 cursor-pointer">Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
              Company
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="hover:text-slate-900 cursor-pointer">About Us</li>
              <li className="hover:text-slate-900 cursor-pointer">Careers</li>
              <li className="hover:text-slate-900 cursor-pointer">Contact</li>
              <li className="hover:text-slate-900 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
              Support
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="hover:text-slate-900 cursor-pointer">Help Center</li>
              <li className="hover:text-slate-900 cursor-pointer">FAQs</li>
              <li className="hover:text-slate-900 cursor-pointer">Community</li>
              <li className="hover:text-slate-900 cursor-pointer">Feedback</li>
            </ul>
          </div>
        </div>


        <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Vidyalaya. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built for learners, by learners.
          </p>
        </div>
      </div>
    </footer>
  )
}
