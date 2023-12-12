import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";

import { IconChevronRight } from '@tabler/icons-react';

import Image1 from '@images/extintor.jpg'


const Ofertas = () => {
    return (
        <div className='mb-10'>
            <div className='flex justify-between mb-3' >
                <h2 className='text-xl'>Ofertas y descuentos</h2>
                <Link
                    isExternal
                    showAnchorIcon
                    href='#'
                    anchorIcon={<IconChevronRight />}
                    className='hidden sm:flex'
                >
                    Ver todos los productos
                </Link>
            </div>

            <div>
                <Swiper
                    slidesPerView={5}
                    navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='flex '>
                        <Card isHoverable  className='max-w-[15rem] max-h-[18rem] h-[18rem]' shadow="sm" isPressable radius='sm' onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0 bg-slate-400">
                                <Image
                                    shadow="none"
                                    radius="none"
                                    height="100%"
                                    className="object-cover"
                                    src={Image1}
                                />
                            </CardBody>
                            <CardFooter className="text-start justify-start items-start text-small h-[50%] block">
                                <div className='mb-2'>
                                    <p>Casco Ala Completa con suspensión Fas-Trac III </p>

                                </div>
                                {/* precio */}
                                <div>
                                    <p>Precio Original: <del>$100</del></p>
                                    <span className='text-2xl mr-3'>$ 50.00</span>
                                    <span className='text-sm text-success'>50% Descuento</span>
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='max-w-[15rem] max-h-[18rem] h-[18rem]' shadow="sm" isPressable radius='sm' onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0 bg-slate-400">
                                <Image
                                    shadow="none"
                                    radius="none"
                                    height="100%"
                                    className="object-cover"
                                    src={Image1}
                                />
                            </CardBody>
                            <CardFooter className="text-start justify-start items-start text-small h-[50%] block">
                                <div className='mb-2'>
                                    <p>Casco Ala Completa con suspensión Fas-Trac III </p>

                                </div>
                                {/* precio */}
                                <div>
                                    <p>Precio Original: <del>$100</del></p>
                                    <span className='text-2xl mr-3'>$ 50.00</span>
                                    <span className='text-sm text-success'>50% Descuento</span>
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='max-w-[15rem] max-h-[18rem] h-[18rem]' shadow="sm" isPressable radius='sm' onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0 bg-slate-400">
                                <Image
                                    shadow="none"
                                    radius="none"
                                    height="100%"
                                    className="object-cover"
                                    src={Image1}
                                />
                            </CardBody>
                            <CardFooter className="text-start justify-start items-start text-small h-[50%] block">
                                <div className='mb-2'>
                                    <p>Casco Ala Completa con suspensión Fas-Trac III </p>

                                </div>
                                {/* precio */}
                                <div>
                                    <p>Precio Original: <del>$100</del></p>
                                    <span className='text-2xl mr-3'>$ 50.00</span>
                                    <span className='text-sm text-success'>50% Descuento</span>
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='max-w-[15rem] max-h-[18rem] h-[18rem]' shadow="sm" isPressable radius='sm' onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0 bg-slate-400">
                                <Image
                                    shadow="none"
                                    radius="none"
                                    height="100%"
                                    className="object-cover"
                                    src={Image1}
                                />
                            </CardBody>
                            <CardFooter className="text-start justify-start items-start text-small h-[50%] block">
                                <div className='mb-2'>
                                    <p>Casco Ala Completa con suspensión Fas-Trac III </p>

                                </div>
                                {/* precio */}
                                <div>
                                    <p>Precio Original: <del>$100</del></p>
                                    <span className='text-2xl mr-3'>$ 50.00</span>
                                    <span className='text-sm text-success'>50% Descuento</span>
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='max-w-[15rem] max-h-[18rem] h-[18rem]' shadow="sm" isPressable radius='sm' onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0 bg-slate-400">
                                <Image
                                    shadow="none"
                                    radius="none"
                                    height="100%"
                                    className="object-cover"
                                    src={Image1}
                                />
                            </CardBody>
                            <CardFooter className="text-start justify-start items-start text-small h-[50%] block">
                                <div className='mb-2'>
                                    <p>Casco Ala Completa con suspensión Fas-Trac III </p>

                                </div>
                                {/* precio */}
                                <div>
                                    <p>Precio Original: <del>$100</del></p>
                                    <span className='text-2xl mr-3'>$ 50.00</span>
                                    <span className='text-sm text-success'>50% Descuento</span>
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='max-w-[15rem] max-h-[18rem] h-[18rem]' shadow="sm" isPressable radius='sm' onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0 bg-slate-400">
                                <Image
                                    shadow="none"
                                    radius="none"
                                    height="100%"
                                    className="object-cover"
                                    src={Image1}
                                />
                            </CardBody>
                            <CardFooter className="text-start justify-start items-start text-small h-[50%] block">
                                <div className='mb-2'>
                                    <p>Casco Ala Completa con suspensión Fas-Trac III </p>

                                </div>
                                {/* precio */}
                                <div>
                                    <p>Precio Original: <del>$100</del></p>
                                    <span className='text-2xl mr-3'>$ 50.00</span>
                                    <span className='text-sm text-success'>50% Descuento</span>
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='max-w-[15rem] max-h-[18rem] h-[18rem]' shadow="sm" isPressable radius='sm' onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0 bg-slate-400">
                                <Image
                                    shadow="none"
                                    radius="none"
                                    height="100%"
                                    className="object-cover"
                                    src={Image1}
                                />
                            </CardBody>
                            <CardFooter className="text-start justify-start items-start text-small h-[50%] block">
                                <div className='mb-2'>
                                    <p>Casco Ala Completa con suspensión Fas-Trac III </p>

                                </div>
                                {/* precio */}
                                <div>
                                    <p>Precio Original: <del>$100</del></p>
                                    <span className='text-2xl mr-3'>$ 50.00</span>
                                    <span className='text-sm text-success'>50% Descuento</span>
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Ofertas