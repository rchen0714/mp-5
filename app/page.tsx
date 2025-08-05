"use client"
import {useState, useEffect} from "react";
import AliasDisplay from '@/components/AliasDisplay';
import { AliasProp } from "@/types/types";


export default function Home() {
  const [aliases, setAliases] = useState<AliasProp[]>([]);

  useEffect(() => {
    const fetchAliases = async () => {
      const res = await fetch('/api/aliases');
      const data = await res.json();
      setAliases(data);
    };
    fetchAliases();
  }, []);

  return (
      <AliasDisplay inputAliases={aliases} />
  );
}
