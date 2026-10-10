import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export function Summerall() {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      .summerall-project {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      }

      .summerall-project img {
        box-shadow: 0 0 0 0 transparent !important;
      }

      .section-divider {
        height: 1px;
        background: linear-gradient(to right, transparent, #e5e7eb, transparent);
        margin: 4rem 0;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="summerall-project bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Summerall Law</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Designing confidence into a complex estate planning process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Timeline</h3>
              <p className="text-gray-700">Summer 2025</p>

              <h3 className="text-lg font-semibold text-blue-600 mt-6 mb-2">Role</h3>
              <p className="text-gray-700">UI/UX Designer</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">The Challenge</h3>
              <p className="text-gray-700">Users weren't lacking motivation—they were lacking confidence. Complex legal processes needed to feel clear and reassuring.</p>
            </div>
          </div>

          <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-8">
            <img src="/images/summerall-hero.png" alt="Summerall Law platform" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>

      <div className="section-divider"></div>

      {/* Process Section */}
      <div className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Process</h2>
            <p className="text-xl text-gray-600 mb-8">
              Translating legal complexity into approachable digital experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Led an iterative design process in Figma to transform dense legal workflows into clearer, more guided user experiences. Conducted user testing to identify friction points and collaborated closely with attorneys and engineers to balance usability with legal accuracy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Worked closely with front-end and back-end engineers throughout implementation to create a more cohesive and approachable experience across the platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <img src="/images/summerall-process-1.png" alt="Design process" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <img src="/images/summerall-process-2.png" alt="User research whiteboard" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* Design System Section */}
      <div className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Design System</h2>
            <p className="text-xl text-gray-600 mb-8">
              Creating a system that made complex workflows feel simpler and more approachable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Built a reusable design system in Figma to bring consistency across the platform's workflows, navigation, typography, spacing, and interface components.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The system helped create a clearer and more cohesive experience while making collaboration between design and engineering more seamless. By reducing visual friction and simplifying interactions, the platform felt easier to navigate and more approachable for clients moving through sensitive legal processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <img src="/images/summerall-prototype.png" alt="Design system components" className="w-full h-auto rounded-lg mb-6" />
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Components</h3>
                <p className="text-gray-600">Reusable interface elements ensuring visual consistency</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Navigation Patterns</h3>
                <p className="text-gray-600">Clear wayfinding through complex multi-step workflows</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Typography System</h3>
                <p className="text-gray-600">Hierarchy and readability for legal documents and forms</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <img src="/images/summerall-typography.png" alt="Typography system" className="w-full h-auto rounded-lg" />
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <img src="/images/summerall-collab.png" alt="Design collaboration" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* Key Insight Section */}
      <div className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">The Key Insight</h2>

            <div className="bg-blue-50 rounded-3xl p-12 md:p-16 border-2 border-blue-200">
              <p className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-6">
                Users were not struggling with motivation.
              </p>
              <p className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-8">
                They were struggling with confidence.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Many clients hesitated during the trust funding process because actions felt legally sensitive and unfamiliar. The experience needed to feel calm, clear, and reassuring rather than overwhelming.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* Before & After Section */}
      <div className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Evolution of the Design</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Before</h3>
                <img src="/images/summerall-before.png" alt="Before redesign" className="w-full h-auto rounded-lg mb-6" />
                <p className="text-gray-600">Cluttered interface with overwhelming information density</p>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">After</h3>
                <img src="/images/summerall-hero.png" alt="After redesign" className="w-full h-auto rounded-lg mb-6" />
                <p className="text-gray-600">Clear navigation with guided step-by-step workflows</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* Outcome Section */}
      <div className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Outcome</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Improved clarity across workflows and increased fully funded trusts by 100%.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The redesign streamlined trust funding workflows while improving communication between clients, attorneys, and technical teams. More importantly, it helped make a legally complex process feel easier to understand and navigate.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">100%</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Increase in Fully Funded Trusts</h3>
                    <p className="text-gray-600">Direct impact from improved user confidence</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Streamlined Workflows</h3>
                    <p className="text-gray-600">Clearer guidance through complex legal processes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Enhanced Collaboration</h3>
                    <p className="text-gray-600">Better communication across all stakeholders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-12">
              <blockquote className="text-2xl font-bold text-gray-900 leading-relaxed">
                "Thoughtful systems, clear communication, and small interface decisions can help people feel more confident navigating complex processes."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Key Takeaway</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            In complex B2B SaaS products, the user interface is not just about aesthetics—it's about building trust and confidence. By focusing on clarity, consistency, and reducing cognitive load, we transformed a legally complex platform into an approachable experience that users could navigate with confidence.
          </p>
        </div>
      </div>
    </div>
  )
}
