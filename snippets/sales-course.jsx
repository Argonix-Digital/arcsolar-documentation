export const CourseProgress = () => {
const courseKey = "arcsolar-sales-onboarding-v1";
const lessons = [
  { id: "workspace", title: "Find your workspace", path: "/sales-onboarding/workspace" },
  { id: "customer", title: "Meet your customer", path: "/sales-onboarding/customer" },
  { id: "conversation", title: "Make the conversation count", path: "/sales-onboarding/conversation" },
  { id: "assessment", title: "Understand the home", path: "/sales-onboarding/assessment" },
  { id: "quote", title: "Build a confident quote", path: "/sales-onboarding/quote" },
  { id: "follow-through", title: "Follow through beautifully", path: "/sales-onboarding/follow-through" },
  { id: "ready", title: "Get ready for your first customer", path: "/sales-onboarding/ready" },
];
const readProgress = () => {
  try {
    const value = JSON.parse(window.localStorage.getItem(courseKey) || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
};
const complete = (value) => Array.isArray(value) && value.length === 3 && value.every((item) => item === true);

  const [progress, setProgress] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const refresh = () => { setProgress(readProgress()); setLoaded(true); };
    refresh();
    window.addEventListener("storage", refresh);
    return () => window.removeEventListener("storage", refresh);
  }, []);
  const count = lessons.filter((lesson) => complete(progress[lesson.id])).length;
  const next = lessons.find((lesson) => !complete(progress[lesson.id]));
  return (
    <section aria-label="Your course progress" className="my-8 border-y border-zinc-200 py-6 dark:border-zinc-700">
      <p className="m-0 text-sm font-medium" aria-live="polite">{loaded ? `${count} of 7 lessons checked off` : "Your course, at your pace"}</p>
      <div role="progressbar" aria-label="Completed lessons" aria-valuenow={count} aria-valuemin={0} aria-valuemax={7} aria-valuetext={`${count} of 7 lessons checked off`} className="my-4 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        <div className="h-full rounded-full" style={{ width: `${count / 7 * 100}%`, backgroundColor: "#3D88F2" }} />
      </div>
      <p className="mb-4 mt-0">{count === 7 ? "Practice complete. Bring your checklist to your manager before your first live quote." : "Small steps. A clear path. Pick up exactly where you left off."}</p>
      <a className="inline-block py-2 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" href={next ? next.path : "/sales-onboarding/ready"}>
        {next ? `${count === 0 ? "Start" : "Continue"}: ${next.title}` : "Review your final checklist"}
      </a>
      <p className="mb-0 mt-4 text-sm">Saved only in this browser profile, on this docs address. Not sent to your manager. Use your own profile on a shared computer; clearing browser data resets your ticks.</p>
    </section>
  );
};

export const LessonChecklist = ({ lessonId, items }) => {
  const courseKey = "arcsolar-sales-onboarding-v1";
  const readProgress = () => {
    try {
      const value = JSON.parse(window.localStorage.getItem(courseKey) || "{}");
      return value && typeof value === "object" && !Array.isArray(value) ? value : {};
    } catch {
      return {};
    }
  };
  const complete = (value) => Array.isArray(value) && value.length === 3 && value.every((item) => item === true);
  const [checks, setChecks] = useState([false, false, false]);
  const [loaded, setLoaded] = useState(false);
  const [saveFailed, setSaveFailed] = useState(false);
  useEffect(() => {
    const saved = readProgress()[lessonId];
    setChecks(items.map((_, index) => Array.isArray(saved) && saved[index] === true));
    setLoaded(true);
  }, [lessonId]);
  const toggle = (index) => {
    const next = checks.map((checked, itemIndex) => itemIndex === index ? !checked : checked);
    setChecks(next);
    try {
      window.localStorage.setItem(courseKey, JSON.stringify({ ...readProgress(), [lessonId]: next }));
      setSaveFailed(false);
    } catch {
      setSaveFailed(true);
    }
  };
  return (
    <fieldset className="my-8 border-0 border-t border-zinc-200 px-0 py-5 dark:border-zinc-700">
      <legend className="pr-3 font-semibold">Your checkpoint</legend>
      <p className="mt-0 text-sm">Tick each box when you have tried it or talked it through with your manager. You can untick a box to revisit it.</p>
      {items.map((item, index) => (
        <label key={item} className="my-2 flex cursor-pointer items-start gap-3 py-2">
          <input type="checkbox" checked={checks[index] || false} disabled={!loaded} onChange={() => toggle(index)} className="mt-1 h-5 w-5 shrink-0" style={{ accentColor: "#3D88F2" }} />
          <span>{item}</span>
        </label>
      ))}
      <p role="status" className="mb-0 text-sm">{saveFailed ? "Browser storage is unavailable. Your ticks work on this page but may not survive a refresh. Keep a note of your lesson before leaving." : complete(checks) ? "Lesson checked off. You’re ready for the next step." : "Your ticks are saved on this device when browser storage is available."}</p>
    </fieldset>
  );
};
