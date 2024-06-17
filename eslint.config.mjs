import eslint from "@antfu/eslint-config";

export default eslint({
	stylistic: {
		indent: "tab",
		quotes: "double",
		semi: true,
	},
	typescript: true,
	// vue: true,
	vue: {
		overrides: {
			"unused-imports/no-unused-imports": "off",
			"unused-imports/no-unused-vars": "off",
			"vue/component-tags-order": ["error", {
				order: ["script", "template", "style"],
			}],
			"vue/no-mutating-props": ["error", { shallowOnly: true }],
		},
	},
});
