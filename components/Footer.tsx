export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-zinc-900 text-zinc-50 py-12"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Spot.new</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Custom dog gear that&apos;s as unique as your furry friend. Designed
              with love, printed with care.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="text-sm text-zinc-400 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded transition-colors inline-block"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-sm text-zinc-400 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded transition-colors inline-block"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/shipping"
                    className="text-sm text-zinc-400 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded transition-colors inline-block"
                  >
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-sm text-zinc-400 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded transition-colors inline-block"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4" role="list">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-zinc-400 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-zinc-400 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="text-zinc-400 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">We Accept</h4>
              <div className="flex gap-3 flex-wrap" aria-label="Payment methods">
                <div
                  className="bg-white rounded px-2 py-1"
                  aria-label="Visa"
                  role="img"
                >
                  <svg
                    width="40"
                    height="24"
                    viewBox="0 0 40 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="24" rx="2" fill="#1434CB" />
                    <text
                      x="20"
                      y="16"
                      fontFamily="Arial, sans-serif"
                      fontSize="12"
                      fontWeight="bold"
                      fill="white"
                      textAnchor="middle"
                    >
                      VISA
                    </text>
                  </svg>
                </div>
                <div
                  className="bg-white rounded px-2 py-1"
                  aria-label="Mastercard"
                  role="img"
                >
                  <svg
                    width="40"
                    height="24"
                    viewBox="0 0 40 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="24" rx="2" fill="black" />
                    <circle cx="15" cy="12" r="6" fill="#EB001B" />
                    <circle cx="25" cy="12" r="6" fill="#F79E1B" />
                  </svg>
                </div>
                <div
                  className="bg-white rounded px-2 py-1"
                  aria-label="American Express"
                  role="img"
                >
                  <svg
                    width="40"
                    height="24"
                    viewBox="0 0 40 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="24" rx="2" fill="#006FCF" />
                    <text
                      x="20"
                      y="16"
                      fontFamily="Arial, sans-serif"
                      fontSize="10"
                      fontWeight="bold"
                      fill="white"
                      textAnchor="middle"
                    >
                      AMEX
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
            <p>
              © {currentYear} Spot.new. All rights reserved.
            </p>
            <p>
              Powered by{' '}
              <a
                href="https://printify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded transition-colors underline"
              >
                Printify
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
