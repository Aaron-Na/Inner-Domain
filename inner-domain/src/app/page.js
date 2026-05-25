"use client"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Inner Domain</h1>
        <p className="text-xl text-gray-400 mb-8">
          Train your body. Master your mind.
        </p>
        <button onClick={()=> document.getElementById('tiers').scrollIntoView({behavior: 'smooth'})}
        className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200">
          Enter the Domain
        </button>
      </section>
    <section id="tiers" className = "py-20 px-4">
      <h2 className = "text-3xl font-bold text-center mb-12"> Choose Your Path</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/*Free Tier */}
        <div className = "revolving-border-red p-6 transition-all hover:-translate-y-2">
          <h3 className = "text-xl font-bold mb-2"> Free</h3>
          <p className = "text-gray-400 mb-4">$0/Month</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li> Community Acess</li>
            <li>Free Workout Plans</li>
            <li>Mental Reimagining Intro  </li>
          </ul>
          <button className="w-full mt-6 py-2 border border-white rounded hover:bg-white hover:text-black">
            Get Started
          </button>


        </div>
        {/* Tier 1*/}
        <div className="revolving-border-gold p-6 transition-all hover:-translate-y-2">
          <h3 className = "text-xl font-bold mb-2"> Tier 1</h3>
          <p className = "text-gray-400 mb-4">$50/Month</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Everything in Free</li>
            <li>Custom 4-week training programs</li>
            <li>Bi-Weekly 1-on-1 Coaching Calls</li>
            <li>Progress & Habit Tracking</li>
            <li>Visualization and Mindset Work</li>
          </ul>
          <button className="w-full mt-6 py-2 bg-white text-black rounded fount-semibold hover:bg-gray-200 ">
            Subscribe 
          </button>
        </div>
        {/* Tier 2*/}
        <div className="revolving-border-cosmic p-6 transition-all hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2"> Tier 2</h3>
          <p className="text-gray-400 mb-4">$100/Month</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Everything in Tier 1</li>
            <li>Advanced AI-Powered Insights</li>
            <li>Weekly 1-on-1 Coaching Calls</li>
            <li>Custom Nutrition Guidance</li>
            <li>Personalized Visualization and Self Image Reprogramming Work</li>
          </ul>
          <button className="w-full mt-6 py-2 bg-white text-black rounded fount-semibold hover:bg-gray-200 ">
            Subscribe 
          </button>
        </div>

      </div>
      
    </section>

    </main>
  );
}