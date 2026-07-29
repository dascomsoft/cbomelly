'use client'

import { useEffect } from 'react'

export default function Clarity() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Protection cruciale : empêche React de réexécuter le script
    // à chaque navigation client-side ou remount
    if (window.__clarityLoaded) return

    // ============================================
    // CODE OFFICIEL CLARITY (inchangé)
    // ============================================
    ;(function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          ;(c[a].q = c[a].q || []).push(arguments)
        }
      t = l.createElement(r)
      t.async = 1
      t.src = 'https://www.clarity.ms/tag/' + i
      y = l.getElementsByTagName(r)[0]
      y.parentNode.insertBefore(t, y)
    })(window, document, 'clarity', 'script', 'xtzbfnosxa')

    window.__clarityLoaded = true
  }, [])

  return null
}