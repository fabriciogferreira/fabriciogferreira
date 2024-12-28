import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Jobs(){
    return (
        <section>
            <h1>Jobs</h1>
            <Tabs defaultValue="account" className="flex">
                <TabsList className="flex-col">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <h4>cargo</h4>
                    <span>iniciado em - last? Presente : terminado em</span>
                    <div>
                        <p>paragrafo 1</p>
                        <p>paragrafo 2</p>
                    </div>
                    <div>
                        <span>laravel</span>
                    </div>
                </TabsContent>
                <TabsContent value="password">
                    <h4>cargo</h4>
                    <span>iniciado em - last? Presente : terminado em</span>
                    <div>
                        <p>paragrafo 1</p>
                        <p>paragrafo 2</p>
                    </div>
                    <div>
                        <Badge variant="outline">
                            <img width={25} src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png" alt="" />
                            laravel
                        </Badge>

                    </div>
                </TabsContent>
            </Tabs>

        </section>
    )
}