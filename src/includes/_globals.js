import _ from "lodash";
export default {
    install(app) {
        const basComponents =
            import.meta.glob("../components/base/*.vue", {
                eager: true,
            });
        //convert object to array key:value
        Object.entries(basComponents).forEach(([path, module]) => {
            const componentName = _.upperFirst(
                _.camelCase(
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