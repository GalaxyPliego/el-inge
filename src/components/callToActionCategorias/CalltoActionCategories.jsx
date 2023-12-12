import React from 'react'
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

import Herramientas from '../../assets/images/herramientas.jpg'

const CalltoActionCategories = () => {
    return (
        <div className='mb-10 grid md:grid-cols-2 gap-3'>
            <div className=''>
                <Card shadow='md' isHoverable isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                        {/* <h4 className="text-black font-medium text-2xl">Seguridad, Higiene y Protección</h4> */}
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src={Herramientas}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <h4 className="text-white/90 font-medium text-xl">Prevención, protección y seguridad</h4>
                            {/* <p className="text-black text-tiny">Available soon.</p>
                        <p className="text-black text-tiny">Get notified.</p> */}
                        </div>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Ver más
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className=''>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                        {/* <h4 className="text-black font-medium text-2xl">Seguridad, Higiene y Protección</h4> */}
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src={Herramientas}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <h4 className="text-white/90 font-medium text-xl">Seguridad, Higiene y Protección</h4>
                            {/* <p className="text-black text-tiny">Available soon.</p>
                        <p className="text-black text-tiny">Get notified.</p> */}
                        </div>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Ver más
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default CalltoActionCategories