import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Articles(){
    return (
        <section className="flex">
            <h1>Articles</h1>
            <Card>
                <CardHeader>
                    <div>

                    </div>
                    wallpaaper
                    <CardTitle>title</CardTitle>
                    <CardDescription>publicado em</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>description</p>
                </CardContent>
                <CardFooter>
                    <p>atualizado em</p>
                    <span>likes, comentários</span>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    wallpaaper
                    <CardTitle>title</CardTitle>
                    <CardDescription>publicado em</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>description</p>
                </CardContent>
                <CardFooter>
                    <p>atualizado em</p>
                    <span>likes, comentários</span>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    wallpaaper
                    <CardTitle>title</CardTitle>
                    <CardDescription>publicado em</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>description</p>
                </CardContent>
                <CardFooter>
                    <p>atualizado em</p>
                    <span>likes, comentários</span>
                </CardFooter>
            </Card>
        </section>
    )
}