import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Ratings() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data: ratings } = await supabase
    .from("ratings")
    .select(
      `
      id,
      off,
      def,
      rated_at,
      teams (
        id,
        name,
        short_name,
        code,
        pulse_id
      )
    `
    );
  console.log(ratings);

  return (
    <div>
      <h1>Ratings</h1>
      <ul>
        {ratings?.map((rating) => (
          <li key={rating.id}>
            Team: {rating.teams?.name} ({rating.teams?.short_name}) — Off: {rating.off}, Def: {rating.def}
          </li>
        ))}
      </ul>
    </div>
  );
}
