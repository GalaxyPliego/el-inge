import React from 'react'

import { Card } from "@nextui-org/react";

const Footer = () => {
    return (
        <Card radius='none' className="p-12 shadow">
            <div className="container mx-auto flex flex-wrap items-center justify-between">

                {/* Información de contacto */}
                <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4">Contacto</h2>
                    <p>Dirección: Tu dirección</p>
                    <p>Email: info@tuecommerce.com</p>
                    <p>Teléfono: +123 456 7890</p>
                </div>

                {/* Enlaces rápidos */}
                <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4">Enlaces Rápidos</h2>
                    <ul>
                        <li><a href="#" className="hover:underline">Inicio</a></li>
                        <li><a href="#" className="hover:underline">Productos</a></li>
                        <li><a href="#" className="hover:underline">Ofertas</a></li>
                        <li><a href="#" className="hover:underline">Contacto</a></li>
                    </ul>
                </div>

                {/* Redes sociales */}
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <h2 className="text-2xl font-bold mb-4">Redes Sociales</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-300">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

            </div>
        </Card>
    )
}

export default Footer