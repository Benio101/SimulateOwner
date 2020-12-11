/**
 * @name SimulateOwner
 * @description Silulate having admin and owner permissions.
 * @website https://github.com/Benio101/SimulateOwner
 * @github https://github.com/Benio101/SimulateOwner
 * @github_raw https://raw.githubusercontent.com/Benio101/SimulateOwner/main/SimulateOwner.plugin.js
 * @updateUrl https://raw.githubusercontent.com/Benio101/SimulateOwner/main/SimulateOwner.plugin.js
 * @source https://raw.githubusercontent.com/Benio101/SimulateOwner/main/SimulateOwner.plugin.js
 * @author Benio
 * @authorId 231850998279176193
 */

module.exports = (() =>
{
	// ------------------------------------------------------------------------------------------------------------
	// ------------------------------------ Config ----------------------------------------------------------------
	// ------------------------------------------------------------------------------------------------------------

	const config =
	{
		info:
		{
			name: 'SimulateOwner',
			description: 'Silulate having admin and owner permissions.',
			website: 'https://github.com/Benio101/SimulateOwner',
			github: 'https://github.com/Benio101/SimulateOwner',
			github_raw: 'https://raw.githubusercontent.com/Benio101/SimulateOwner/main/SimulateOwner.plugin.js',
			updateUrl: 'https://raw.githubusercontent.com/Benio101/SimulateOwner/main/SimulateOwner.plugin.js',
			source: 'https://raw.githubusercontent.com/Benio101/SimulateOwner/main/SimulateOwner.plugin.js',
			author: 'Benio',
			authorId: '231850998279176193',
			version: '1.0.0',
		},
	};

	return (([Plugin, BDFDB]) =>
	{
		return class SimulateOwner extends Plugin
		{
			onLoad()
			{
				
			}

			onStart()
			{
				let user_id = BdApi.findModuleByProps('getCurrentUser').getCurrentUser().id;
				let guild_id = BdApi.findModuleByProps('getLastSelectedGuildId').getLastSelectedGuildId();
				BdApi.findModuleByProps('getGuildPermissions').getGuildPermissions(guild_id).data = 2147483647n;
				BdApi.findModuleByProps('getGuild').getGuild(guild_id).ownerId = user_id;
			}

			onStop()
			{
				
			}

			update()
			{
				ZLibrary.PluginUpdater.checkForUpdate(config.info.name, config.info.version, config.info.updateUrl);
			}
		};
	})(window.BDFDB_Global.PluginUtils.buildPlugin(config));
})();
