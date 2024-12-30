import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type article ={
    title: string,
    description: string,
    published_at: string,
    updated_at: string,
    likes: number,
    comments: number,
    wallpaper_path: string
}

const ARTICLES: Array<article> = [
    {
        title: "Banco de dados: praticidade vs especificação",
        description: "Neste artgo abordei questões sobre quando a praticidade vence a especificação.",
        published_at: "25/07/2021",
        updated_at: "01/09/2024",
        likes: 657,
        comments: 100,
        wallpaper_path: "/asdas/adsda/aaaaaa",
    },
    {
        title: "Programação: como iniciar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi error ipsa nemo repellat laudantium porro, quaerat, minus harum fuga optio eveniet maiores hic pariatur quasi expedita aut velit repellendus.",
        published_at: "30/09/2021",
        updated_at: "01/09/2025",
        likes: 300,
        comments: 57,
        wallpaper_path: "/asdas/adsda/aaaaaa",
    },
]

export default function Articles(){
    return (
        <section>
            <h1>Articles</h1>
            <div className="flex flex-wrap justify-around gap-4">
                {ARTICLES.map((article) => {
                    return (
                        <Card key={article.title} className="max-w-sm flex flex-col ">
                            <CardHeader>
                                <div>
                                    wallpaaper
                                </div>
                                <CardTitle>{article.title}</CardTitle>
                                <CardDescription>{article.published_at}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{article.description}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between mt-auto self-end">
                                <span>
                                    Atualizado em {article.updated_at}
                                </span>
                                <div className="flex gap-2">
                                    <span>
                                        {article.likes}
                                        &nbsp;
                                        <i className="fa-solid fa-thumbs-up"></i>
                                    </span>
                                    <span>
                                        {article.comments}
                                        &nbsp;
                                        <i className="fa-solid fa-comments"></i>
                                    </span>
                                </div>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}