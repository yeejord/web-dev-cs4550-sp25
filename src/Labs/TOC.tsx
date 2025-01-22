import { Link } from "react-router";

export default function TOC() {
    return (
        <div>
            <h2>Table of Contents</h2>
            <ul>
                <li>
                    <Link to = "/Labs/Lab1">Lab 1</Link>
                </li>
                <li>
                    <Link to = "/Labs/Lab2">Lab 2</Link>
                </li>
                <li>
                    <Link to = "/Labs/Lab3">Lab 3</Link>
                </li>
                <li>
                    <Link to = "/Kambaz">Kambaz</Link>
                </li>
                <li>
                    <a id="wd-github" href="https://github.com/yeejord/web-dev-cs4550-sp25.git">Link to Git Repository</a>
                </li>
            </ul>
        </div>
    );
}