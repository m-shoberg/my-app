/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MdMRiU3FQue
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="w-full h-full bg-gray-900">
      <header className="flex items-center justify-between p-4 bg-gray-800 shadow-md">
        <h1 className="text-xl font-semibold text-white">Security Camera Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button className="text-gray-300" variant="outline">
            Toggle Feeds
          </Button>
          <form className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              className="w-full bg-gray-950 shadow-none appearance-none pl-8 text-white"
              placeholder="Search camera feeds..."
              type="search"
            />
          </form>
        </div>
      </header>
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            alt="Camera feed"
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src="http://localhost:5000/camera_feed/0"
            width={400}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Front Gate</span>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            alt="Camera feed"
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src="http://localhost:5000/camera_feed/1"
            width={400}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Backyard</span>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            alt="Camera feed"
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src="http://localhost:5000/camera_feed/2"
            width={400}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Garage</span>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            alt="Camera feed"
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src="/placeholder.svg"
            width={400}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Living Room</span>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            alt="Camera feed"
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src="/placeholder.svg"
            width={400}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Kitchen</span>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            alt="Camera feed"
            className="object-cover w-full aspect-[4/3]"
            height={300}
            src="/placeholder.svg"
            width={400}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Bedroom</span>
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
