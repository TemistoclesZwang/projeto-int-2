import "./index.css";

interface BasePageProps {
    title:string
    subtitle:string
}
export function BasePage({title,subtitle}:BasePageProps){
    
    return(
        <main className="BasePageContainer">
          <h1 className="BasePageTitle">{title}</h1>
          <h2 className="BasePageSubTitle">{subtitle}</h2>
        </main>
    )
}