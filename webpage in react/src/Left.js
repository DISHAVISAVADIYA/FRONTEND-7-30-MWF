import React from "react";
import "./style.css";

const a = "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg";
function Left() {
    return (
        <>
          <aside>
                <div className="forest">
                    <h3>What is Forest?</h3>
                    <div className="image">
                        <img src={a} />
                    </div>
                    <p>
                        Lorem ipsum dolr sit amet consectetur adipisicing elit. Incidunt et quisquam error repudiandae, aspernatur aut excepturi necessitatibus natus culpa facilis distinctio nam iusto minus a quibusdam. In quod eos cumque.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero laborum voluptatum est id neque. Possimus autem explicabo accusamus ad officia quam ab, architecto dicta, earum, blanditiis animi incidunt consequuntur in ducimus! Eveniet maxime cum atque voluptatem quia debitis nemo accusamus id ipsum. Quasi unde vel quas facilis, necessitatibus debitis nulla mollitia delectus veniam nesciunt eaque. Nihil et quas rem quos minima facere odio id nam quis ipsum, porro voluptate ea blanditiis ex pariatur cumque, veritatis culpa provident est minus rerum doloribus expedita 
                    </p>
                        <p>

                        eligendi. Officiis voluptatibus itaque illo sed facilis nam consequatur, doloribus rerum laudantium velit iusto eum at necessitatibus vel odio dolore in maiores totam ad neque minima vitae optio. Nemo similique nulla neque modi dolores optio quis ducimus deserunt quae exercitationem voluptatibus cumque aspernatur dolorum laboriosam necessitatibus, magnam vitae temporibus omnis ex veniam, voluptatum quaerat? Sit recusandae ex
                    </p>
                    <p> nemo veniam eius odio assumenda sapiente magnam. Fugiat ullam sed laborum nostrum accusantium tenetur consequatur culpa. Nostrum iure rerum eveniet? Incidunt, quod est mollitia exercitationem quae enim blanditiis nisi tenetur harum excepturi cum, numquam, id quam! Illo, consectetur aut natus quasi debitis adipisci dolore in. Et aliquid ducimus eius vero numquam ab eaque quod placeat. Quae amet eos iusto delectus deserunt.
                    </p>
                    <p className="comment">comments <span style={{backgroundColor: 'black',color: 'aliceblue', padding:'2px'}}>0</span></p>
                    

                    </div>
                {/* contact form  */}
                    <div className="contact" id="contact">
                        <form>
                            <h1>CONTACT FORM</h1>
                            <input type="text" placeholder="First Name" required/><br/>
                            <input type="text" placeholder="Last Name" required/><br/>
                            <input type="email" placeholder="E-mail" required/><br/>
                            <textarea name="massage" id="" cols="30" rows="5" placeholder="Massage"></textarea>
                            <input type="submit" value="submit" className="sm"/>


                        </form>
                    </div>
            </aside>
        </>
    );
}
export default Left;