interface GamebannerProps{
    bannerUrl:string;
    title:string;
    adsCount: number;
}

export function GameBanner(props: GamebannerProps) {
    return(
        <a href="" className="relative roundend-lg overflow-hidden">
            <img src={props.bannerUrl} alt="" />
            <div className="w-full pt-16 pb-4 px=4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white px-2 block">{props.title}</strong>
              <span className="text-zinc-300 text-sm px-2 block">{props.adsCount} anúncio(s)</span>
            </div>
        </a>
    )
}