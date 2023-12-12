import NavBar from '@components/navigation/Navbar'
import Footer from '@components/footer/Footer'
import PropTypes from 'prop-types';

const Layout = (props) => {
    const { children } = props

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout