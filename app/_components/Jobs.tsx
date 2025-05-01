import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Link from "next/link"
import Image from "next/image"

import { jobs, tJob } from "@/types/jobs"
import { useTranslations } from 'next-intl';
import { Badge } from "@/components/ui/badge";

export default function Jobs(){
    const t = useTranslations('Jobs');

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
                        <div className="flex items-center gap-2">
                            <h3>
                                {job.position} | {job.started_at} - {job.finished_at ? job.finished_at : t('current')}
                            </h3>
                            <Badge>{t('type.' + job.type)}</Badge>
                        </div>

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
                                    <Badge variant={"secondary"} key={technologie.name} className="rounded p-1.5">
                                        <technologie.icon size={18} className="me-1" />
                                        {technologie.name}
                                    </Badge>
                            )}
                        </div>
                    </TabsContent>
                )
            })}
        </Tabs>
    )
}