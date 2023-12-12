import React from 'react'

import { Button, Link } from "@nextui-org/react";

import { IconDeviceComputerCamera, IconFlame, IconChevronRight, IconBatteryAutomotive, IconChargingPile, IconTool } from '@tabler/icons-react';

const Categories = () => {
    return (
        <div className='mb-10'>
            {/* // SECCIÓN PARA EL TITULO */}
            <div className='flex justify-between mb-3' >
                <h2 className='text-xl'>Descubre nuestras categorías</h2>
                <Link
                    isExternal
                    showAnchorIcon
                    href='#'
                    anchorIcon={<IconChevronRight />}
                    className='hidden sm:flex'
                >
                    Explorar todas
                </Link>
            </div>

            {/* // SECCIÓN PARA LOS BOTONES */}
            <div className='grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-3'>
                <div className='text-center'>
                    <Button variant='faded' isIconOnly aria-label="Like" className='rounded-full w-24 h-24'>
                        <IconFlame size={48} stroke={1} color='gray' />
                    </Button>
                    <h3 className='text-center'>El Inge Safety</h3>
                </div>
                <div className='text-center'>
                    <Button variant='faded' isIconOnly aria-label="Like" className='rounded-full w-24 h-24'>
                        <IconFlame size={48} stroke={1} color='gray' />
                    </Button>
                    <h3 className='text-center'>El Inge Contra Incendios</h3>
                </div>
                <div className='text-center'>
                    <Button variant='faded' isIconOnly aria-label="Like" className='rounded-full w-24 h-24'>
                        <IconBatteryAutomotive size={48} stroke={1} color='gray' />
                    </Button>
                    <h3 className='text-center'>Categoría X</h3>
                </div>
                <div className='text-center'>
                    <Button variant='faded' isIconOnly aria-label="Like" className='rounded-full w-24 h-24'>
                        <IconFlame size={48} stroke={1} color='gray' />
                    </Button>
                    <h3 className='text-center'>Categoría X</h3>
                </div>
                <div className='text-center'>
                    <Button variant='faded' isIconOnly aria-label="Like" className='rounded-full w-24 h-24'>
                        <IconChargingPile size={48} stroke={1} color='gray' />
                    </Button>
                    <h3 className='text-center'>Categoría X</h3>
                </div>
                <div className='text-center'>
                    <Button variant='faded' isIconOnly aria-label="Like" className='rounded-full w-24 h-24'>
                        <IconFlame size={48} stroke={1} color='gray' />
                    </Button>
                    <h3 className='text-center'>Categoría X</h3>
                </div>
                <div className='text-center'>
                    <Button variant='faded' isIconOnly aria-label="Like" className='rounded-full w-24 h-24'>
                        <IconTool size={48} stroke={1} color='gray' />
                    </Button>
                    <h3 className='text-center'>Categoría X</h3>
                </div>

            </div>
        </div>
    )
}

export default Categories