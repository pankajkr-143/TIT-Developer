export default function WallOfImpact() {
    const impactData = [
      { icon: "👥", count: "1,500+", label: "Active Members" },
      { icon: "💻", count: "200+", label: "Projects Completed" },
      { icon: "👜", count: "90%+", label: "ATS-friendly Resumes" },
      { icon: "🛡️", count: "30+", label: "Cybersecurity Enthusiasts" },
      { icon: "🧠", count: "15+", label: "Machine Learning Specialists" },
      { icon: "🔗", count: "45+", label: "Open Source Contributors" },
    ];
  
    return (
      <div className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Wall of Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <span className="text-3xl text-blue-600">{item.icon}</span>
              <p className="text-2xl font-bold mt-2">{item.count}</p>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  