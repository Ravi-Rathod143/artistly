
"use client";
import Header from "@/components/Header";
import { Suspense, lazy } from "react";
import data from "@/data/submissions.json";

const DashboardTable = lazy(() => import("@/components/DashboardTable"));

export default function DashboardPage() {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Artist Submissions</h2>
        <Suspense fallback={<p>Loading table...</p>}>
          <DashboardTable submissions={data} />
        </Suspense>
      </div>
    </div>
  );
}