import CoreConcept from "./CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts(){
        return (
            <section id="core-concepts">
        <h2>Connect with me</h2>
        <ul>
          {CORE_CONCEPTS.map((items) => (<CoreConcept key={items.title} {...items} />
        ))}
         
        </ul>


        </section>
        )
    
}