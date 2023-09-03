export default function Track({ heading, by, content }) {
  return (
    <div className="w-full bg-primary10 pb-12">
      <div className="w-[90%] sm:w-[70%] mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center pt-12 pb-8" style={{lineHeight:1.5}}>{heading}</h1>

        <div>
          {by.map(function (person, idx) {
            return (
              <h2 key={idx} className="text-xl sm:text-2xl my-4 font-semibold">
                {person}
              </h2>
            );
          })}

          <article className="mt-12">
            {content.map(function (con, idx) {
              return <p key={idx} className="text-lg my-4 leading-8">{con}</p>;
            })}
          </article>
        </div>
      </div>
    </div>
  );
}
