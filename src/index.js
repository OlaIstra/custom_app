import "./scss/index.scss";
import { App } from "@/components/app/App";
import { Header } from "@/components/header/Header";
import { Toolbar } from "@/components/toolbar/Toolbar";
import { Formula } from "@/components/formula/Formula";
import { Table } from "@/components/table/Table";

const app = new App("#app", {
  components: [Header, Toolbar, Formula, Table],
});

app.render();
