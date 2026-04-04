(define-data-var enabled bool false)
(define-read-only (get-enabled) (var-get enabled))
(define-public (set-enabled (v bool)) (begin (var-set enabled v) (ok v)))
