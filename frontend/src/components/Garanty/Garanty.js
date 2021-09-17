import React from 'react'
import './Garanty.css'
export default function Garanty() {
    return (
        <section className="section_guaranty section">


            <div className="garanty_wrapper">

                <div className="garanty_about">

                    <div className="garanty_info">
                        <h2>Nos Garanties</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque suscipit, iure
                            delectus possimus explicabo aut quae natus? Omnis natus dolor culpa esse necessitatibus
                            voluptas laboriosam non ad nobis architecto explicabo, consequuntur quidem autem?</p>
                    </div>

                </div>

                <div className="garanty_grid">

                    <div className="grid_box one">

                        <div className="box_item">
                            <div className="item_icon">
                                <i className="fas fa-hand-holding-heart"></i>

                            </div>
                            <h4>Fabrication artisanale</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolore aut aliquam eos
                                obcaecati facere accusantium error quidem. Illum repudiandae sed mollitia
                                quod.</p>
                            <a href="#">En savoir plus</a>
                        </div>

                    </div>
                    <div className="grid_box two">

                        <div className="box_item">
                            <div className="item_icon">

                                <i className="fas fa-truck"></i>

                            </div>
                            <h4>Livraison gratuite</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolore aut aliquam eos
                                obcaecati facere accusantium error quidem. Illum repudiandae sed mollitia
                                quod.</p>
                            <a href="#">En savoir plus</a>
                        </div>

                    </div>

                    <div className="grid_box three">

                        <div className="box_item">
                            <div className="item_icon">

                                <i className="fas fa-thumbs-up"></i>
                            </div>
                            <h4>Satisfait ou remboursé</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolore aut aliquam eos
                                obcaecati facere accusantium error quidem. Illum repudiandae sed mollitia
                                quod.</p>
                            <a href="#">En savoir plus</a>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}
