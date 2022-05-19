import React, {useEffect, useState} from 'react'
import { Form, Button, Col, Row, Container, NavItem, NavLink } from 'react-bootstrap'
import Link from "next/link";

let BASE_API_URI = process.env.NEXT_PUBLIC_BASE_API_URI as string;

export default function Footer() {
    const [categories, setCategories] = useState<Category[]>();

    const fetchCategories = async () => {
        const response = await fetch(BASE_API_URI + "/categories");
        const data: Category[] = await response.json();
        setCategories(data);
    };

    useEffect(() => {
        fetchCategories();
      }, []);

      
    return (
        <footer className="mt-4 pt-5 bg-dark">
            <Container>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <NavLink as={Link} href="/home">
                            <a className="text-light mx-2 text-decoration-none">
                                Home
                            </a>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink as={Link} href="/about">
                            <a className="text-light mx-2 text-decoration-none">
                                About
                            </a>
                        </NavLink>
                    </li>
                    {categories?.map((category: Category, index) => (
                        <NavLink as={Link} href={`/${category.id}`} key={index}>
                            <a className="text-light mx-2 text-decoration-none">
                                {category.title}
                            </a>
                        </NavLink>
                    ))}
                    <li className="nav-item">
                        <NavLink as={Link} href="/contact">
                            <a className="text-light mx-2 text-decoration-none">
                                Contact
                            </a>
                        </NavLink>
                    </li>
                </ul>
                <p className="text-center text-muted">© 2021 Company, Inc</p>
            </Container>
        </footer>
    )
}
