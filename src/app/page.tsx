/**
 * v0 by Vercel.
 * @see https://v0.dev/t/E9RDjg7KWY6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="w-full h-full bg-gray-100 dark:bg-gray-900">
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-xl font-semibold">Porch Security Camera Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button className="dark:text-gray-300" variant="outline">
            Toggle Feeds
          </Button>
          <form className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full bg-white shadow-none appearance-none pl-8 dark:bg-gray-950"
              placeholder="Search camera feeds..."
              type="search"
            />
          </form>
        </div>
      </header>
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            alt="IP Camera Feed 1"
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src="http://195.196.36.242/mjpg/video.mjpg"
            width={400}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Front Gate</span>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            alt="IP Camera Feed 2"
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src="http://173.198.10.174//mjpg/video.mjpg"
            width={400}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Back Gate</span>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            alt="IP Camera Feed 3"
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src="http://217.171.212.63/mjpg/video.mjpg"
            width={400}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Compound North</span>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            alt="IP Camera Feed 4"
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src="/placeholder.svg"
            width={400}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Compound East</span>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            alt="IP Camera Feed 5"
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src="/placeholder.svg"
            width={400}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-semibold">POI 1</span>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            alt="IP Camera Feed 6"
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src="/placeholder.svg"
            width={400}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-semibold">POI 2</span>
          </div>
        </div>
      </main>
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
