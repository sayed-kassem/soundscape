import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase"
export default {
    install(app) {
        const basComponents =
            import.meta.glob("../components/base/*.vue", {
                eager: true,
            });
        //convert object to array key:value
        Object.entries(basComponents).forEach(([path, module]) => {
            const componentName = upperFirst(
                camelCase(
                    path
                    .split("/")
                    .pop()
                    .replace(/\.\w+$/, "")
                )
            );

            app.component(`Base${componentName}`, module.default);
            //console.log(componentName, path)
        });
    },
};