"use client"

import * as React from "react"

function Footerdemo() {
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="flex justify-center">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>7 Straits View</p>
              <p>Marina One East Tower #05-01</p>
              <p>Singapore 018936</p>
              <p>Email: cindy@agrix.ai</p>
            </address>
          </div>
        </div>
        <div className="mt-12 flex justify-center border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 AgriX AI Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo } 