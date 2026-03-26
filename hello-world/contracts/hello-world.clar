;; Hello World Contract
;; A simple contract that returns a greeting

(define-read-only (say-hi)
  (ok "Hello from Stacks!"))

(define-read-only (echo-number (val uint))
  (ok val))
