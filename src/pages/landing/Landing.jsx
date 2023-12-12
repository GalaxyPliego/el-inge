import BannerCarousel from "@components/landing/bannerCarousel/BannerCarousel";
import Categories from "@components/landing/categories/Categories";
import Ofertas from "@components/landing/ofertas/Ofertas";
import CalltoActionCategories from "@components/callToActionCategorias/CalltoActionCategories";
import Footer from "@components/footer/Footer";

import { Button, Link } from "@nextui-org/react";
import Sugerencias from "@components/landing/sugerencias/Sugerencias";
import Layout from "../layout/Layout";

const Landing = () => {

    return (
        <Layout>
            <div className="w-[100%] m-auto max-w-screen-2xl mb-20">
                <div className="m-auto">
                    <BannerCarousel />
                </div>
                <div className="py-3 px-3 md:px-10 lg:px-10 xl:px-10 md:border-y lg:border-y-0 mb-10">
                    <Categories />
                    <Ofertas />
                    <CalltoActionCategories />
                    <Sugerencias />
                </div>

                <div className="mb-10 mx-3">
                    <div className=" text-center">
                        <div className="">
                            <h2 className="text-xl font-bold mb-4">¿Ya tienes una cuenta? Inicia sesión para ver contenido personalizado</h2>
                            <Button className="mb-4 w-[15rem]" color="primary" radius="full" size="sm">
                                Iniciar Sesión
                            </Button>
                        </div>
                        <div className="flex justify-center align-middle ">
                            <p className="text-tiny mr-3 flex items-center">¿Nuevo por aquí?</p>
                            <Link href="#" className="">Registrarse</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Landing