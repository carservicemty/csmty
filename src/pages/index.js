import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Icon, Hr, Strong, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, SocialMedia } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			align-items="center"
			justify-content="center"
		>
			<Image
				src="https://uploads.quarkly.io/64ceb8018bd7e600185c43a3/images/CAR%20SERVICE%20%28LOGO%20ORIGINAL%29%20%282%29.png?v=2023-08-07T16:28:19.302Z"
				display="block"
				width="120px"
				height="150px"
				align-self="center"
			/>
		</Box>
		<Section background="#a61414" height="30px" />
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://uploads.quarkly.io/64ceb8018bd7e600185c43a3/images/IMG_8015.jpg?v=2023-08-07T18:18:33.161Z) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Tiempo, calidad y honestidad: nuestros pilares para un servicio impecable.{"\n\n\n"}
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					ACERCA DE NOSOTROS
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section
			padding="48px 0 48px 0"
			sm-padding="60px 0 60px 0"
			quarkly-title="About-14"
			background=",--color-darkL2"
			color="#818181"
			border-color="--color-darkL2"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				sm-min-width="280px"
				flex="1 1 0%"
			/>
		</Section>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="60%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 40px 0px" color="--dark" font="--headline3" md-margin="0px 0px 30px 0px">
					HISTORIA
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--base">
					Desde su inauguración el{" "}
					<Strong>
						12
					</Strong>
					<Strong>
						{" "}de junio de 2000
					</Strong>
					, en{" "}
					<Strong>
						Car Service
					</Strong>
					{" "}nos hemos comprometido a{" "}
					<Strong>
						ofrecer
					</Strong>
					{" "}un{" "}
					<Strong>
						trato esmerado y de primera
					</Strong>
					{" "}al{" "}
					<Strong>
						cuidado
					</Strong>
					{" "}de los{" "}
					<Strong>
						vehículos
					</Strong>
					{" "}de{" "}
					<Strong>
						nuestros clientes
					</Strong>
					.{" "}
					<Strong>
						Tratamos
					</Strong>
					{" "}cada{" "}
					<Strong>
						vehículo
					</Strong>
					{" "}
					<Strong>
						como
					</Strong>
					{" "}si fuera{" "}
					<Strong>
						propio
					</Strong>
					, motivo por el cual{" "}
					<Strong>
						todos
					</Strong>
					{" "}nuestros{" "}
					<Strong>
						clientes
					</Strong>
					{" "}nos{" "}
					<Strong>
						confían el cuidado
					</Strong>
					{" "}y{" "}
					<Strong>
						mantenimiento
					</Strong>
					{" "}de sus{" "}
					<Strong>
						automóviles
					</Strong>
					.
				</Text>
				<Text margin="0px 0px 40px 0px" color="--dark" font="--headline3" md-margin="0px 0px 30px 0px">
					MISIÓN
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--base">
					Buscamos brindar a cada cliente un{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						servicio
					</Strong>
					{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						profesional y personalizado
					</Strong>
					, garantizando la{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						puntualidad
					</Strong>
					{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						en la entrega
					</Strong>
					{" "}de su vehículo.{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Utilizamos
					</Strong>
					{" "}únicamente{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						refacciones de alta calidad{" "}
					</Strong>
					en todas las{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						reparaciones
					</Strong>
					{" "}y{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						mantenimientos
					</Strong>
					{" "}que realizamos.{" "}
				</Text>
			</Box>
			<Image src="https://uploads.quarkly.io/64ceb8018bd7e600185c43a3/images/cs.jpeg?v=2023-08-07T18:48:44.751Z" display="block" />
		</Section>
		<Section
			padding="60px 0 90px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-darkL1"
			display="flex"
			lg-padding="45px 0 45px 0"
			quarkly-title="Advantages/Features-26"
			height="1338px"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				max-width="1200px"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				align-items="center"
				lg-width="100%"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				lg-justify-content="center"
				height="1208px"
			>
				<Text
					as="h1"
					margin="0px"
					font="normal 600 40px/1.5 --fontFamily-sans"
					color="--light"
					width="100%"
					md-width="100%"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					text-align="center"
					sm-text-align="left"
				>
					<Span
						font-weight="normal"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						NUESTROS SERVICIOS
					</Span>
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					color="#f6f3f3"
					text-align="center"
					font="20px --fontFamily-googleMontserrat"
					height="100px"
					align-self="stretch"
					flex="0 1 auto"
					min-height="2px"
				>
					<br />
					MANTENIMIENTOS PREVENTIVOS Y CORRECTIVOS
				</Text>
				<Box
					display="grid"
					width="100%"
					grid-template-columns="repeat(2, 1fr)"
					grid-gap="24px"
					margin="36px 0px 0px 0px"
					max-width="1000px"
					md-grid-template-columns="1fr"
					height="942px"
				>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="--color-red"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Afinación{" "}
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
							- de Motor
							<br />
							- de Transmisión
						</Text>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="--color-red"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Cambio
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
							- de Aceite y Filtro de Aceite
							<br />
							- de Anticongelante
							<br />
							- de Acumulador
							<br />
							- de Balatas
							<br />
							- de Clutch
						</Text>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="--color-red"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Reparación
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
							- al Sistema de Frenos ABS
							<br />
							- de Fugas de Aceite y de Agua
							<br />
							- de Transmisión Automática
							<br />
							- de Fallas Electrónicas y de Combustible
							<br />
							- de Suspensión y Dirección
							<br />
							- y Cambio de Piezas del Aire Acondicionado
							<br />
							- de Dirección Hidráulica
							<br />
							- de Problemas Eléctricos
						</Text>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="--color-red"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Revisión{" "}
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
							- del Sistema de Frenos ABS
							<br />
							- de Suspensión y Dirección
							<br />
							- de Niveles, Mangueras. Abrazaderas y Bandas
							<br />
							- al Sistema de Carga
						</Text>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="--color-red"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Bolsas de aire
							</Text>
						</Box>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="--color-red"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Lavado de Motor
							</Text>
						</Box>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="--color-red"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Limpieza y Revisión del Sistema de Enfriamiento
							</Text>
						</Box>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="--color-red"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Diagnóstico por Computadora
							</Text>
						</Box>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="--color-red"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Recarga de Gas al Clima y Revisión de Fugas
							</Text>
						</Box>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="--color-red"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Lubricación y Ajuste de Suspensión
							</Text>
						</Box>
					</Box>
				</Box>
				<Text
					margin="0px 0px 0px 0px"
					color="#f6f3f3"
					text-align="center"
					font="20px --fontFamily-googleMontserrat"
					height="100px"
					align-self="stretch"
					flex="0 1 auto"
					min-height="2px"
				>
					<br />
					<br />
					¿No encuentras el servicio que requieres? ¡Contáctanos!
				</Text>
			</Box>
		</Section>
		<Section background="--color-darkL1" padding="80px 0 80px 0">
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 30px 0px"
					font="normal 500 50px/1.2 --fontFamily-sans"
					color="--light"
					text-align="center"
					sm-font="normal 700 62px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					height="50px"
				>
					CONTACTO
				</Text>
				<Text margin="0px 0px 48px 0px" font="--lead" color="--light" text-align="center" />
				<Span
					text-align="center"
					color="--light"
					font="--headline3"
					text-decoration-line="initial"
					margin="0px 0px 16px 0px"
				>
					carservice.mty@gmail.com
				</Span>
				<Span
					text-align="center"
					color="--light"
					font="--headline3"
					text-decoration-line="initial"
					margin="0px 0px 16px 0px"
				>
					(+52) 81 8401 0683
				</Span>
				<Text margin="0px 0px 48px 0px" font="--headline3" color="--light" text-align="center">
					<Span>
						Calle Gral. Aarón Sáenz 3909, Mederos, 64950 Monterrey, N.L.
					</Span>
				</Text>
			</Box>
			<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" instagram="https://instagram.com/instagram" margin="0px 0px 0px 0px">
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="#191E22"
					hover-background="--color-primary"
					margin="0 5px 0 5px"
					padding="5x 5px 5px 5px"
					width="48px"
					height="48px"
					align-items="center"
					display="flex"
					justify-content="center"
					hover-transition="background-color 0.2s ease-in-out 0s"
					transition="background-color 0.2s ease-in-out 0s"
				/>
				<Override
					slot="icon"
					color="--light"
					padding="7px 7px 7px 7px"
					border-width="0px"
					size="38px"
					border-radius="50px"
				/>
				<Override slot="link-facebook" user-select="auto" />
			</SocialMedia>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"64ceb8018bd7e600185c43a1"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});