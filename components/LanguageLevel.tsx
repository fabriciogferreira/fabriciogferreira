"use client"

enum LevelsEnum {
    A1 = "A1",
    A2 = "A2",
    B1 = "B1",
    B2 = "B2",
    C1 = "C1",
    C2 = "C2",
}

type props = {
    level?: keyof typeof LevelsEnum,
}

export default function LanguageLevel({level}: props){
    const levelIndex = level ? Object.keys(LevelsEnum).indexOf(level) : -1;

    return (
        <div className="flex gap-1">
            {Object.values(LevelsEnum).map((LanguageLevel, index) => {
                return (
                    <div key={LanguageLevel}>
                        <span className="font-bold text-base">
                            {LanguageLevel}
                        </span>
                        <div className={`w-full h-2 ${levelIndex >= index ? "bg-green-500" : "bg-red-500"}`}>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}