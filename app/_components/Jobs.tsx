import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Link from "next/link"
import Image from "next/image"

import { jobs, tJob } from "@/types/jobs"

export default function Jobs(){

    const lastJob = jobs[0]

    const buildId = (job: tJob): string => {
        return `${job?.enterprise} - ${job?.position} - ${job.started_at}`
    }

    return (
        <Tabs defaultValue={buildId(lastJob)} className="flex flex-col md:flex-row">
            <TabsList className="flex flex-col h-fit md:mr-4">
                {jobs.map((job) => {
                    return (
                        <TabsTrigger key={buildId(job)} value={buildId(job)} className="w-full justify-start">{buildId(job)}</TabsTrigger>
                    )
                })}
            </TabsList>
            {jobs.map((job) => {
                return (
                    <TabsContent key={buildId(job)} value={buildId(job)} className="flex flex-col gap-3 mt-0">
                        <h4>
                            {job.position} | {job.started_at} - {job.finished_at ? job.finished_at : "Presente"}
                        </h4>

                        <div>
                            <Link href={job.link} target="_blank" className="float-left m-4">
                                <Image src={job.logo} alt="Logo da olie" width={200} height={100}/>
                            </Link>
                            {job.paragraphs.map((paragraph) => {
                                return <p key={paragraph} className="pb-3">{paragraph}</p>
                            })}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {job
                                .technologies
                                .sort((a, b) => a.order - b.order)
                                .map((technologie) => 
                                    <div key={technologie.name} className="border rounded-lg flex gap-2 px-2 py-1 text-lg font-bold">
                                        <div className="w-6">
                                            <technologie.icon />
                                        </div>
                                        {technologie.name}
                                    </div>
                            )}
                        </div>
                    </TabsContent>
                )
            })}
        </Tabs>
    )
}