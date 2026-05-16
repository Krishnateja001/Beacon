const jobs = [
  {
    id: "PHRM-1001",
    name: "Clinical Trial Patient Load",
    source: "Oracle Clinical",
    targetTable: "clinical_patient_records",
    status: "Success",
    startedAt: "06:00 AM",
    duration: "22m 14s",
    records: "2.4M",
    message: "Patient records loaded successfully",
  },
  {
    id: "PHRM-1002",
    name: "Adverse Event Processing",
    source: "Safety API",
    targetTable: "adverse_event_reports",
    status: "Running",
    startedAt: "09:30 AM",
    duration: "11m 03s",
    records: "842K",
    message: "Validating FDA adverse event payloads",
  },
  {
    id: "PHRM-1003",
    name: "Drug Inventory Reconciliation",
    source: "SAP Inventory",
    targetTable: "drug_inventory_snapshot",
    status: "Failed",
    startedAt: "08:45 AM",
    duration: "4m 52s",
    records: "0",
    message: "Inventory mismatch detected across regions",
  },
  {
    id: "PHRM-1004",
    name: "Lab Result Normalization",
    source: "LabCorp Feed",
    targetTable: "normalized_lab_results",
    status: "Queued",
    startedAt: "Pending",
    duration: "-",
    records: "-",
    message: "Waiting for upstream lab feed",
  },
  {
    id: "PHRM-1005",
    name: "Claims Data Aggregation",
    source: "Healthcare Claims API",
    targetTable: "claims_analytics_mart",
    status: "Warning",
    startedAt: "07:15 AM",
    duration: "15m 28s",
    records: "1.7M",
    message: "Completed with 37 invalid claim rows",
  },
];
function Summarycard({title,value,subtitle}){
  return(
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900">{value}</h2>
      <p clasName="mt-1 text-xs text-slate-500">{subtitle}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <header>
          <p className="text-sm font-semibold uppercase text-blue-700">
            Beacon
          </p>

          <h1 className="text-3xl font-bold text-slate-900">
            Job Monitoring Dashboard
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Monitor job runs, failures, retries, and pipeline health.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Summarycard title="Total Jobs" value="32" subtitle="Across all pipelines"/>
          <Summarycard title="Running" value="3" subtitle="Currently executing" />
          <Summarycard  title="Failed" value="2" subtitle="Needs attention"/>
          <Summarycard title="Warnings" value="5" subtitle="Completed with issues" />
        </section>
        <main className="grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl bg-white p-5 shadow-sm lg:col-span-2">
            <h2 className="text-lg font-bold text-slate-900">
              Pipeline Runs
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Latest pharma data pipeline executions.
            </p>
            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Job</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Started</th>
                    <th className="px-4 py-3">Duration</th>
                    <th className="px-4 py-3">Records</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100"></tbody>
                {/* jobs.map((job)=>{<p>job.id</p>}) */}
              </table>

            </div>
            
          </section>
          <aside className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Job Details
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Select a job to view logs and metadata.
            </p>
          </aside>

        </main>
      </div>
    </div>

  );
}