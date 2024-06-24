import AuthButton from "../components/AuthButton";
import ViewEventsList from "../components/ViewEventsList";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <AuthButton />
      </div>
      <ViewEventsList />
    </div>
  );
}
