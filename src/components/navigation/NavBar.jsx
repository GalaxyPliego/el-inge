import React from 'react'

import { Divider, Navbar, NavbarBrand, Tooltip, NavbarContent, NavbarItem, Link as LinkUi, Badge, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";

import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import { IconMoon, IconSun, IconShoppingCart, IconReportMoney, IconShoppingBag, IconSearch, IconHeart, IconBell, IconHome, IconAlarm, IconCategory, IconUserShield, IconBuildingStore, IconChevronDown, IconFireHydrant, IconShieldCheck, IconFireExtinguisher } from '@tabler/icons-react';

import Isotipo from '@images/logos/isotipo.png'
import { toggleTheme } from '@features/theme/themeSlice';

import User from '@images/user.jpg'

const NavBar = () => {
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const theme = useSelector((state) => state.theme.theme);

    const onToggleTheme = () => {
        dispatch(toggleTheme()); // Llama a la acción para cambiar el tema
    };

    const menuItems = [
        {
            label: "Inicio",
            link: "/",
            icon: IconHome,
        },
        {
            label: "Notificaciones",
            link: "/notificaciones",
            icon: IconBell,
        },
        {
            label: "Mis compras",
            link: "/mis-compras",
            icon: IconShoppingBag,
        },
        {
            label: "Favoritos",
            link: "/favoritos",
            icon: IconHeart,
        },
        {
            label: "Categorías",
            link: "/categorias",
            icon: IconCategory,
        },
        {
            label: "Vender",
            link: "/vender",
            icon: IconReportMoney,
        },
    ];


    return (
        <Navbar isBordered isBlurred="false" shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} maxWidth='2xl' height="6.5-rem" className='pt-3'>
            <div className='w-full'>
                {/* LOGO, BUSCADOR Y BOTONES */}
                <div className='w-full flex justify-center align-middle items-center pb-3'>
                    <NavbarContent justify='center'>
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="lg:hidden h-8 w-8 rounded-md"
                        />
                        <NavbarBrand>
                            <Link to={'/'}>
                                <img src={Isotipo} alt="EL INGE" className="w-12 min-w-[2.5rem]" />
                            </Link>
                        </NavbarBrand>
                    </NavbarContent>

                    {/* BUSCADOR */}
                    <NavbarContent className="w-full mx-3" justify='center'>
                        <Input
                            classNames={{
                                base: "h-10 max-w-[750px] w-full",
                                mainWrapper: "h-full",
                                input: "text-small",
                                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                            }}
                            placeholder="Busca tus productos, marcas y más..."
                            size="sm"
                            endContent={<IconSearch size={18} />}
                            type="search"
                            className='h-[2rem]'
                        />
                    </NavbarContent>

                    {/* BOTONES Y PERFIL */}
                    <NavbarContent className="items-end justify-end align-bottom hidden sm:flex me-3" >
                        <NavbarItem className="hidden md:flex md:align-middle md:items-center">
                            <Tooltip showArrow={true} content="Cambiar tema">
                                <button className="focus:outline-none" type="button" onClick={onToggleTheme}>
                                    {theme === "dark" ? (
                                        <IconSun className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <IconMoon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            </Tooltip>
                        </NavbarItem>
                        <NavbarItem className='flex align-bottom'>
                            <Tooltip showArrow={true} content="Mi tienda">
                                <button className="focus:outline-none" type="button">
                                    <IconBuildingStore className="text-2xl text-default-400 pointer-events-none" />
                                </button>
                            </Tooltip>
                        </NavbarItem>
                        <NavbarItem className='flex align-bottom'>
                            <Tooltip showArrow={true} content="Favoritos">
                                <button className="focus:outline-none" type="button">
                                    <IconHeart className="text-2xl text-default-400 pointer-events-none" />
                                </button>
                            </Tooltip>
                        </NavbarItem>
                        <NavbarItem className='flex align-bottom'>
                            <Badge content="0" color="primary" size='sm'>
                                <Tooltip showArrow={true} content="Carrito de compras">
                                    <button className="focus:outline-none" type="button">
                                        <IconShoppingCart className="text-2xl text-default-400 pointer-events-none" />
                                    </button>
                                </Tooltip>
                            </Badge>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent className='flex justify-end'>
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="secondary"
                                    name="Jason Hughes"
                                    size="sm"
                                    src={User}
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="" className="h-14 gap-2">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">zoey@example.com</p>
                                </DropdownItem>
                                <DropdownItem key=""></DropdownItem>
                                <DropdownItem key="">Team Settings</DropdownItem>
                                <DropdownItem key="">Analytics</DropdownItem>
                                <DropdownItem key=""></DropdownItem>
                                <DropdownItem key="">Configurations</DropdownItem>
                                <DropdownItem key="">Help & Feedback</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarContent>


                </div>
                <Divider orientation='horizontal' className='hidden lg:flex' />
                {/* CATEGORÍAS */}
                <div className='w-full hidden lg:flex items-center gap-2'>
                    {/* CATEGORÍAS */}
                    <NavbarContent justify='center' className='flex gap-3'>
                        {/* SEGURIDAD */}
                        {/* Abrir cuando paso el mouse */}
                        <Dropdown>
                            {/* TITULO */}
                            <NavbarItem>
                                <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        size='sm'
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                        endContent={<IconChevronDown className="" size={16} />}
                                        radius="sm"
                                        variant="light"
                                    >
                                        Seguridad
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            {/* MENU */}
                            <DropdownMenu
                                aria-label="ACME features"
                                className="w-[540px]"
                                itemClasses={{
                                    base: "gap-4",
                                }}
                            >
                                {/* ACCESORIOS CONTRA INCENDIOS */}
                                <DropdownItem
                                    key="autoscaling"
                                    description="Extintores, Supresión de fuego, Equipo de bombero, Equipo de emergencia, etc. "
                                    startContent={<IconFireHydrant size={24} />}
                                >
                                    Accesorios contra incendios
                                </DropdownItem>
                                {/* PROTECCIÓN CONTRA INCENDIOS */}
                                <DropdownItem
                                    key="supreme_support"
                                    // description="Overcome any challenge with a supporting team ready to respond."
                                    startContent={<IconFireExtinguisher size={24} />}
                                >
                                    Protección contra incendios
                                </DropdownItem>
                                {/* EQUIPO DE PROTECCIÓN PERSONAL */}
                                <DropdownItem
                                    key="usage_metrics"
                                    description="Protección para la cabeza, facial, visual, auditiva, respiratoria, corporal, manos, pies, etc."
                                    startContent={<IconShieldCheck size={24} />}
                                >
                                    Equipo de protección personal
                                </DropdownItem>
                                {/* UNIFORMES */}
                                <DropdownItem
                                    key="production_ready"
                                    // description="ACME runs on ACME, join us and others serving requests at web scale."
                                    startContent={<IconUserShield size={24} />}
                                >
                                    Uniformes
                                </DropdownItem>
                                {/* DETECCIÓN Y ALARMA */}
                                <DropdownItem
                                    key="99_uptime"
                                    description="Accesorios, automatización, cables, detectores, etc."
                                    startContent={<IconAlarm size={24} />}
                                >
                                    Detección y alarma
                                </DropdownItem>
                                {/* SISTEMA ESPECIAL */}
                                <DropdownItem
                                    key="99_uptime"
                                // description="Applications stay on the grid with high availability and high uptime guarantees."
                                // startContent={icons.server}
                                >
                                    Sistema especial
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        {/* MATERIALES Y PRECOLADOS */}
                        <Dropdown>
                            <NavbarItem>
                                <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        size='sm'
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                        endContent={<IconChevronDown className="" size={16} />}
                                        radius="sm"
                                        variant="light"
                                    >
                                        Materiales y Precolados
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu
                                aria-label="ACME features"
                                className="w-[540px]"
                                itemClasses={{
                                    base: "gap-4",
                                }}
                            >
                                <DropdownItem
                                    key="autoscaling"
                                    description="ACME scales apps to meet user demand, automagically, based on load."
                                // startContent={IconChevronDown}
                                >
                                    Autoscaling
                                </DropdownItem>
                                <DropdownItem
                                    key="usage_metrics"
                                    description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                                // startContent={icons.activity}
                                >
                                    Usage Metrics
                                </DropdownItem>
                                <DropdownItem
                                    key="production_ready"
                                    description="ACME runs on ACME, join us and others serving requests at web scale."
                                // startContent={icons.flash}
                                >
                                    Production Ready
                                </DropdownItem>
                                <DropdownItem
                                    key="99_uptime"
                                    description="Applications stay on the grid with high availability and high uptime guarantees."
                                // startContent={icons.server}
                                >
                                    +99% Uptime
                                </DropdownItem>
                                <DropdownItem
                                    key="supreme_support"
                                    description="Overcome any challenge with a supporting team ready to respond."
                                // startContent={icons.user}
                                >
                                    +Supreme Support
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        {/* ELECTRICIDAD */}
                        <Dropdown>
                            <NavbarItem>
                                <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        size='sm'
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                        endContent={<IconChevronDown className="" size={16} />}
                                        radius="sm"
                                        variant="light"
                                    >
                                        Electricidad
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu
                                aria-label="ACME features"
                                className="w-[540px]"
                                itemClasses={{
                                    base: "gap-4",
                                }}
                            >
                                <DropdownItem
                                    key="autoscaling"
                                    description="ACME scales apps to meet user demand, automagically, based on load."
                                // startContent={IconChevronDown}
                                >
                                    Autoscaling
                                </DropdownItem>
                                <DropdownItem
                                    key="usage_metrics"
                                    description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                                // startContent={icons.activity}
                                >
                                    Usage Metrics
                                </DropdownItem>
                                <DropdownItem
                                    key="production_ready"
                                    description="ACME runs on ACME, join us and others serving requests at web scale."
                                // startContent={icons.flash}
                                >
                                    Production Ready
                                </DropdownItem>
                                <DropdownItem
                                    key="99_uptime"
                                    description="Applications stay on the grid with high availability and high uptime guarantees."
                                // startContent={icons.server}
                                >
                                    +99% Uptime
                                </DropdownItem>
                                <DropdownItem
                                    key="supreme_support"
                                    description="Overcome any challenge with a supporting team ready to respond."
                                // startContent={icons.user}
                                >
                                    +Supreme Support
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        {/* BOMBAS Y EQUIPOS */}
                        <Dropdown>
                            <NavbarItem>
                                <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        size='sm'
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                        endContent={<IconChevronDown className="" size={16} />}
                                        radius="sm"
                                        variant="light"
                                    >
                                        Bombas y Equipos
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu
                                aria-label="ACME features"
                                className="w-[540px]"
                                itemClasses={{
                                    base: "gap-4",
                                }}
                            >
                                <DropdownItem
                                    key="autoscaling"
                                    description="ACME scales apps to meet user demand, automagically, based on load."
                                // startContent={IconChevronDown}
                                >
                                    Autoscaling
                                </DropdownItem>
                                <DropdownItem
                                    key="usage_metrics"
                                    description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                                // startContent={icons.activity}
                                >
                                    Usage Metrics
                                </DropdownItem>
                                <DropdownItem
                                    key="production_ready"
                                    description="ACME runs on ACME, join us and others serving requests at web scale."
                                // startContent={icons.flash}
                                >
                                    Production Ready
                                </DropdownItem>
                                <DropdownItem
                                    key="99_uptime"
                                    description="Applications stay on the grid with high availability and high uptime guarantees."
                                // startContent={icons.server}
                                >
                                    +99% Uptime
                                </DropdownItem>
                                <DropdownItem
                                    key="supreme_support"
                                    description="Overcome any challenge with a supporting team ready to respond."
                                // startContent={icons.user}
                                >
                                    +Supreme Support
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        {/* BOTON PARA VER TODAS LAS CATEGORÍAS */}
                        <NavbarItem>
                            <Link to={'/categorias'} className='text-xs'>
                                Ver todas las categorías
                            </Link>
                        </NavbarItem>
                    </NavbarContent>

                    {/* AUTENTICACIÓN */}
                    <NavbarContent justify='end' className='h-full'>
                        <NavbarItem>
                            <p className='text-xs'>
                                Inicia sesión
                            </p>
                        </NavbarItem>
                        <Divider orientation="vertical" className='bg-slate-700' />
                        <NavbarItem>
                            <p className='text-xs'>
                                Crea tu cuenta
                            </p>
                        </NavbarItem>
                    </NavbarContent>
                </div>
            </div>
            <NavbarMenu className='top-[3.8rem] justify-start w-4/5 md:w-2/4 ps-0'>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Button
                            color="foreground"
                            className="w-full justify-start"
                            href={item.link}
                            startContent={<item.icon size={24} />}
                            size="lg"
                        >
                            {item.label}
                        </Button>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default NavBar