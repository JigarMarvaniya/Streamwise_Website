
import { motion } from "framer-motion";

export default function App() {
  const team = [
    {
      name: "Yash Patil",
      role: "Founder",
      img: "/yash.png",
      linkedin: "https://www.linkedin.com/mwlite/profile/in/yash-patil1401199",
    },
    {
      name: "Pragati Malik",
      role: "UAT Testing",
      img: "/pragati.png",
      linkedin: "https://www.linkedin.com/in/pragati-malik-242795179",
    },
    {
      name: "Ranveer Lal",
      role: "Consulting Support",
      img: "/ranveer.png",
      linkedin: "https://www.linkedin.com/in/ranveer-lal-265633187/",
    },
    {
      name: "Jigar Marvaniya",
      role: "Tech Lead",
      img: "/jigar.png",
      linkedin: "https://www.linkedin.com/in/jigar-marvaniya/",
    },
    {
      name: "Satwik Shubham",
      role: "Data Analytics Expert",
      img: "/satwik.png",
      linkedin: "https://www.linkedin.com/in/satwik-shubham-6737a71a4/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-800 font-sans">
      {/* Header */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <h1 className="text-2xl font-bold">StreamWise</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#pricing" className="hover:text-gray-100">Pricing</a></li>
          <li><a href="#features" className="hover:text-gray-100">Features</a></li>
          <li><a href="#contact" className="hover:text-gray-100">Contact</a></li>
          <li><a href="#team" className="hover:text-gray-100">Team</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <header className="text-center py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <motion.h1 
          className="text-5xl font-extrabold text-blue-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Unlock OTT Intelligence with StreamWise
        </motion.h1>
        <motion.p 
          className="text-xl max-w-3xl mx-auto text-blue-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          A powerful SaaS platform for regional OTTs to optimize churn, engagement, and personalization — backed by data science.
        </motion.p>
        <motion.div className="mt-10">
          <a
            href="https://streamwise-pbl.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg py-3 px-8 rounded-lg transition duration-300 shadow-lg"
          >
            Explore our Analytics Product →
          </a>
        </motion.div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-800">Platform Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[
            ["Smart Segmentation", "Identify loyal users, churn risks, binge watchers & more using advanced clustering."],
            ["Churn Prediction", "Proactively retain users by predicting their likelihood to cancel using AI."],
            ["Behavior-Based Pricing", "Personalize subscription offers based on content consumption & engagement."],
            ["Interactive Dashboards", "Visualize KPIs like watch time, device usage, location churn and more."],
            ["Engagement Insights", "See what keeps users hooked — by age, region, or plan type."],
            ["Persona Discovery", "Build actionable personas for targeted campaigns and growth experiments."]
          ].map(([title, desc], i) => (
            <div key={i} className="p-6 bg-blue-50 rounded-xl border border-blue-200 shadow">
              <h3 className="font-bold text-lg text-blue-700 mb-2">{title}</h3>
              <p className="text-blue-800 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-6 bg-gradient-to-b from-white to-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">Pricing Plans</h2>
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
          {[
            ["Free", "Basic Insights", "0", ["User Segments", "Weekly Reports"]],
            ["Growth", "Most Popular", "49", ["All Free features", "Churn Prediction", "Email Reports"]],
            ["Enterprise", "For Large OTTs", "149", ["Custom Dashboards", "API Access", "Dedicated Support"]],
          ].map(([tier, subtitle, price, features]) => (
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-200" key={tier}>
              <h3 className="text-xl font-bold text-indigo-600 mb-1">{tier}</h3>
              <p className="text-blue-700 mb-4">{subtitle}</p>
              <p className="text-3xl font-bold text-indigo-800 mb-4">${price}/mo</p>
              <ul className="text-blue-600 mb-4 space-y-2 text-sm">
                {features.map((f, i) => <li key={i}>✓ {f}</li>)}
              </ul>
              <button className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700">Start Trial</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-blue-100 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Contact Us</h2>
        <form className="max-w-2xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded border border-blue-300" required />
          <input type="email" placeholder="Your Email" className="p-3 rounded border border-blue-300" required />
          <textarea placeholder="Your Message" className="p-3 rounded border border-blue-300" rows="5" required />
          <button type="submit" className="bg-indigo-600 py-3 px-6 rounded hover:bg-indigo-700 text-white font-semibold">
            Send Message
          </button>
        </form>
      </section>

      {/* Team Section */}
      <footer id="team" className="bg-white py-12 px-6">
        <h3 className="text-center text-2xl font-bold text-blue-800 mb-8">Meet the Team</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map(({ name, role, img, linkedin }) => (
            <motion.div
              key={name}
              className="bg-blue-50 rounded-xl p-4 text-center shadow-md hover:shadow-blue-300 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={img} alt={name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />
              <div className="text-xl font-semibold text-blue-700">{name}</div>
              <div className="text-sm text-blue-500 mt-1">{role}</div>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-xs block mt-2 hover:underline"
              >
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-blue-400 text-sm mt-10">&copy; {new Date().getFullYear()} StreamWise. All rights reserved.</p>
      </footer>
    </div>
  );
}
