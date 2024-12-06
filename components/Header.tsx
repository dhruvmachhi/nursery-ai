import Link from "next/link";
import { Button } from "./ui/button";

export default function Header({title, showLibrary} : {title: string, showLibrary?: boolean}) {
  return (
    <div className="flex w-full items-center content center bg-slate-300 p-3 text-center font-bold">
      <p className="basis-1/3 text-xl text-left">Linguistic Trainer</p>
      <p className="basis-1/3 text-xl">{title}</p>
      {showLibrary &&
      <div className="basis-1/3 flex justify-end">
        <Link href="/">
          <Button className="text-xl" variant="outline">Library</Button> 
        </Link>
      </div>
      }
    </div>
  )
}