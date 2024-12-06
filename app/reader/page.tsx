"use client";
import Header from "@/components/Header";
import useBookState from "@/lib/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";



export default function Reader() {
  const book = useBookState((state) => state.book);
  if (book == null) {
    redirect("/")
  }
  return (
    <main>
      <Header title={book?.title} showLibrary/>
      <Page book={book} />
    </main>
  )
}