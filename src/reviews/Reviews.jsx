import { Star } from "lucide-react";
import { reviews } from "./reviewsData";

export default function Reviews() {
  return (
    <section className="bg-slate-950 py-16 text-white" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">
            Customer feedback
          </p>
          <h2 id="reviews-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Reviews from Dreams4u customers
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Published customer feedback about website design, responsiveness,
            communication, and support.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.id} className="border border-slate-800 bg-slate-900 p-6">
              <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className={`h-4 w-4 ${
                      index < review.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-600"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-7 text-slate-200">
                <p>{review.text}</p>
              </blockquote>
              <footer className="mt-5 border-t border-slate-800 pt-4">
                <p className="font-semibold">{review.name}</p>
                {(review.project || review.location) && (
                  <p className="mt-1 text-xs text-slate-400">
                    {[review.project, review.location].filter(Boolean).join(" | ")}
                  </p>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
