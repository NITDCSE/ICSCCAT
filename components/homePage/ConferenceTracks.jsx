import data_analytics from "@/public/Data-analytics.jpg";

export default function ConferenceTracks() {
  const themes = [
    {
      name: "DATA ANALYTICS AND MINING",
      imageUrl: data_analytics,
    },
    {
      name: "CRYPTOGRAPHY, CYBER SECURITY AND NETWORK SECURITY",
      imageUrl: data_analytics,
    },
    {
      name: "CLOUD COMPUTING AND IOT",
      imageUrl: data_analytics,
    },
    {
      name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
      imageUrl: data_analytics,
    },
    {
      name: "HEALTHCARE 4.0",
      imageUrl: data_analytics,
    },
  ];

  return (
    <section id="themes" className="py-6">
      <div className="container flex flex-col mx-auto px-6 py-4">
        <h4 className="max-w-md text-4xl font-bold text-center md:text-4xl md:text-left">Tracks</h4>
        <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
          {themes.map(function (theme, index) {
            return (
              <div
                key={index}
                className="bg-gray-200 p-4 rounded-lg shadow-md flex items-center"
              >
                <div className="w-1/2 pr-4">
                  <img
                    src={theme.imageUrl.src}
                    alt={theme.name}
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <ConferenceTrackGridItem theme={theme.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ConferenceTrackGridItem({ theme }) {
  return (
    <div className="block font-medium text-md leading-tight">
      <p className="text-black font-semibold">{theme}</p>
    </div>
  );
}