import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Icon, Strong, Span, LinkBox, Structure } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
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
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="60%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				sm-align-content="center"
			>
				<Text margin="0px 0px 40px 0px" color="--dark" font="--headline3" md-margin="0px 0px 30px 0px">
					HISTORIA
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--darkL2"
					font="--base"
					width="550px"
					sm-width="372.594px"
				>
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
					{" "}
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
		<Section background="#a61414" height="30px" />
		<Section
			padding="100px 0 200px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-darkL1"
			display="flex"
			lg-padding="45px 0 45px 0"
			quarkly-title="Advantages/Features-26"
			height="1438px"
			sm-height="2000px"
			md-height="2100px"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				max-width="1200px"
				sm-min-width="280px"
				sm-height="2000px"
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
					sm-font="normal 600 50px/1.2 --fontFamily-sans"
					text-align="center"
					sm-text-align="center"
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
							NUESTROS SERVICIOS
						</Strong>
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
					sm-margin="0px 0px 0px 0px"
				>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="#a61414"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
						sm-border-color="#a61414"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="normal 300 30px/1.5 --fontFamily-sans" color="--light" sm-font="normal 300 25px/1.5 --fontFamily-sans">
								Afinación{" "}
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--lightD2">
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
						border-color="#a61414"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
						sm-border-color="#a61414"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="normal 300 30px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--light" sm-font="normal 300 25px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
								Cambio
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--lightD2">
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
						border-color="#a61414"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
						sm-border-color="#a61414"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="normal 300 30px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--light" sm-font="normal 300 25px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
								Revisión{" "}
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--lightD2">
							- del Sistema de Frenos y ABS
							<br />
							- de Suspensión y Dirección
							<br />
							- de Niveles, Mangueras. Abrazaderas y Bandas
							<br />
							- al Sistema de Carga
							<br />
							- de Fallas Eléctricas
							<br />
							- al Sistema de Enfriamiento
							<br />
							- de Bolsas de Aire
							<br />
							- para Compra de Vehículo
						</Text>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="#a61414"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
						sm-border-color="#a61414"
					>
						<Box display="flex" align-items="center" sm-font="25px sans-serif">
							<Text margin="0px 0px 0px 12px" font="normal 300 30px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--light" sm-font="normal 300 25px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
								Reparación
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--lightD2">
							- al Sistema de Frenos y ABS
							<br />
							- de Fugas de Aceite
							<br />
							- de Transmisión Automática
							<br />
							- de Fallas Eléctricas
							<br />
							- de Fugas de Agua
							<br />
							- de Suspensión y Dirección
							<br />
							- de Aire Acondicionado
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
						border-color="#a61414"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
						sm-border-color="#a61414"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="normal 300 30px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--light" sm-font="normal 300 25px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
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
						border-color="#a61414"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
						sm-border-color="#a61414"
					>
						<Box display="flex" align-items="center" font="30px sans-serif">
							<Text margin="0px 0px 0px 12px" font="normal 300 30px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--light" sm-font="normal 300 25px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
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
						border-color="#a61414"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
						sm-border-color="#a61414"
					>
						<Box display="flex" align-items="center" font="30px sans-serif">
							<Text margin="0px 0px 0px 12px" font="normal 300 30px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--light" sm-font="normal 300 25px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
								Revisión para Compra de Vehículo
							</Text>
						</Box>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="#a61414"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
						sm-border-color="#a61414"
					>
						<Box display="flex" align-items="center">
							<Text margin="0px 0px 0px 12px" font="normal 300 30px/1.5 --fontFamily-sans" color="--light" sm-font="normal 300 25px/1.5 --fontFamily-sans">
								Revisión para Carretera y Puntos de Seguridad
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="#a61414">
			<Text margin="0px 0px 0px 0px" color="#faf3f3" text-align="center" font="35px --fontFamily-googleRaleway">
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
					¿No encuentras el servicio que requieres? ¡Contáctanos!
				</Strong>
			</Text>
		</Section>
		<Section
			background="#0E1317"
			padding="100px 0 100px 0"
			position="static"
			sm-padding="90px 0 100px 0"
			sm-height="600px"
			overflow-x="visible"
		>
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
					font="normal 500 80px/1.2 --fontFamily-sans"
					color="--light"
					text-align="center"
					sm-font="normal 700 58px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					height="50px"
				>
					CONTACTO
				</Text>
				<Text margin="0px 0px 48px 0px" font="--lead" color="--light" text-align="center" />
				<Structure cells-number-total="4" cells-number-group="4" display="grid">
					<Override
						slot="Content"
						grid-template-columns="repeat(2, 6fr)"
						sm-grid-template-columns="12fr"
						sm-display="flex"
						sm-justify-content="center"
						grid-gap="50px"
						justify-content="center"
						display="flex"
					>
						<Override slot="cell-1">
							<LinkBox href="tel:8184010683" align-items="flex-start">
								<Text
									margin="0px 0px 0px 0px"
									color="#f0e5e5"
									font="normal 300 25px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
									sm-font="--lead"
									width="250px"
								>
									(+52) 8184010683
								</Text>
							</LinkBox>
						</Override>
						<Override slot="cell-0">
							<LinkBox href="tel:8184010683">
								<Image src="https://uploads.quarkly.io/64ceb8018bd7e600185c43a3/images/phone.png?v=2023-08-21T16:34:22.585Z" display="block" height="50px" width="40px" />
							</LinkBox>
						</Override>
						<Override slot="Cell 0th" position="relative" width="50px" />
						<Override slot="Cell 1st" height="65px" width="190px" display="block" />
						<Override slot="cell-2">
							<LinkBox href="tel:8181142157">
								<Image src="https://uploads.quarkly.io/64ceb8018bd7e600185c43a3/images/phone.png?v=2023-08-21T16:34:22.585Z" display="block" width="40px" />
							</LinkBox>
						</Override>
						<Override slot="cell-3">
							<LinkBox href="tel:8181142157">
								<Text margin="0px 0px 0px 0px" color="#f0e5e5" font="normal 300 25px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" sm-font="--lead">
									(+52) 8181142157
								</Text>
							</LinkBox>
						</Override>
						<Override slot="Cell 2nd" position="relative" />
					</Override>
				</Structure>
				<Structure
					cells-number-group="2"
					cells-number-total="2"
					justify-content="center"
					flex-wrap="wrap"
					align-items="center"
					height="90px"
				>
					<Override
						slot="Content"
						grid-template-columns="repeat(2, 6fr)"
						sm-grid-template-columns="12fr"
						sm-display="flex"
						sm-justify-content="center"
						display="flex"
						justify-content="center"
					>
						<Override slot="cell-1">
							<LinkBox
								padding="0px 0px 10px 0px"
								sm-padding="0px 0px 20px 0px"
								sm-font="20px sans-serif"
								font="30px sans-serif"
								align-items="stretch"
								justify-content="center"
								align-content="center"
								href="mailto:carservice.mty@gmail.com"
							>
								<Text margin="0px 0px 0px 0px" color="#f0e5e5" font="normal 300 25px/1.5 --fontFamily-sans" sm-font="normal 300 20px/1.5 --fontFamily-sans">
									carservice.mty@gmail.com
								</Text>
							</LinkBox>
						</Override>
						<Override slot="cell-0">
							<LinkBox
								order="0"
								align-self="flex-start"
								display="flex"
								href="mailto:carservice.mty@gmail.com"
								position="static"
								align-items="flex-end"
							>
								<LinkBox href="mailto:carservice.mty@gmail.com">
									<Image src="https://uploads.quarkly.io/64ceb8018bd7e600185c43a3/images/mail.png?v=2023-08-21T16:56:37.763Z" display="block" width="50px" />
								</LinkBox>
							</LinkBox>
						</Override>
						<Override slot="Cell 0th" position="relative" width="40px" />
						<Override
							slot="Cell 1st"
							height="65px"
							display="block"
							width="300px"
							text-align="left"
						/>
						<Override slot="cell-2">
							<LinkBox href="tel:8181142157">
								<Image src="https://uploads.quarkly.io/64ceb8018bd7e600185c43a3/images/phone.png?v=2023-08-21T16:34:22.585Z" display="block" width="40px" />
							</LinkBox>
						</Override>
						<Override slot="cell-3">
							<LinkBox
								order="0"
								align-self="flex-start"
								display="flex"
								href="tel:8181142157"
								position="static"
								align-items="center"
								width="300px"
								flex-direction="row-reverse"
								justify-content="flex-end"
							>
								<LinkBox href="tel:8184010683" padding="0px 0px 10px 0px" sm-padding="0px 0px 20px 0px" font="30px sans-serif">
									<Text margin="0px 0px 0px 0px" color="#f0e5e5" font="normal 300 25px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" sm-font="--lead">
										(+52) 8181142157
									</Text>
								</LinkBox>
							</LinkBox>
						</Override>
					</Override>
				</Structure>
				<Structure
					cells-number-group="2"
					justify-content="start"
					flex-wrap="no-wrap"
					align-items="center"
					cells-number-total="2"
					align-content="center"
					display="grid"
				>
					<Override
						slot="Content"
						grid-template-columns="repeat(2, 6fr)"
						sm-grid-template-columns="12fr"
						sm-display="flex"
						sm-justify-content="center"
						display="grid"
						justify-content="start"
						flex-direction="row"
						align-content="center"
						align-items="center"
						justify-items="start"
						width="480px"
					>
						<Override slot="cell-1">
							<LinkBox>
								<Text
									margin="0px 0px px 0px"
									font="normal 300 25px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
									color="--light"
									text-align="right"
									sm-padding="0px 0px 20px 0px"
									sm-font="normal 300 19px/1.5 --fontFamily-sans"
									width="800px"
								>
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										user-select="auto"
										pointer-events="auto"
									>
										Calle Gral. Aarón Sáenz 3909, Mederos, 64950 Monterrey, N.L.
									</Span>
								</Text>
							</LinkBox>
						</Override>
						<Override slot="cell-0">
							<LinkBox
								order="0"
								align-self="flex-start"
								display="flex"
								href="https://goo.gl/maps/mMxPun6hHnTHCFpZA"
								position="static"
								align-items="flex-end"
							>
								<LinkBox>
									<LinkBox href="https://goo.gl/maps/mMxPun6hHnTHCFpZA">
										<Image src="https://uploads.quarkly.io/64ceb8018bd7e600185c43a3/images/location.png?v=2023-08-21T17:06:53.003Z" display="block" width="50px" />
									</LinkBox>
								</LinkBox>
							</LinkBox>
						</Override>
						<Override slot="Cell 0th" position="relative" width="50px" />
						<Override
							slot="Cell 1st"
							height="65px"
							display="block"
							width="300px"
							text-align="left"
						/>
						<Override slot="cell-2">
							<LinkBox href="tel:8181142157">
								<Image src="https://uploads.quarkly.io/64ceb8018bd7e600185c43a3/images/phone.png?v=2023-08-21T16:34:22.585Z" display="block" width="40px" />
							</LinkBox>
						</Override>
						<Override slot="cell-3">
							<LinkBox
								order="0"
								align-self="flex-start"
								display="flex"
								href="tel:8181142157"
								position="static"
								align-items="center"
								width="300px"
								flex-direction="row-reverse"
								justify-content="flex-end"
							>
								<LinkBox href="tel:8184010683" padding="0px 0px 10px 0px" sm-padding="0px 0px 20px 0px" font="30px sans-serif">
									<Text margin="0px 0px 0px 0px" color="#f0e5e5" font="normal 300 25px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" sm-font="--lead">
										(+52) 8181142157
									</Text>
								</LinkBox>
							</LinkBox>
						</Override>
					</Override>
				</Structure>
			</Box>
			<Structure cells-number-total="2" cells-number-group="2">
				<Override
					slot="Content"
					grid-template-columns="repeat(2, 6fr)"
					sm-grid-template-columns="12fr"
					sm-display="flex"
					sm-justify-content="center"
					display="grid"
					grid-gap="50px"
				>
					<Override slot="cell-1">
						<LinkBox href="https://www.instagram.com/carservice.mty/?hl=es-la">
							<Image
								src="https://uploads.quarkly.io/64ceb8018bd7e600185c43a3/images/instagram%20logo.png?v=2023-08-08T23:20:50.602Z"
								display="block"
								align-self="flex-start"
								width="50px"
								padding="1px 0px 0px 0px"
								margin="2.5px 0px 0px 0px"
							/>
						</LinkBox>
					</Override>
					<Override slot="cell-0">
						<LinkBox
							order="0"
							align-self="flex-start"
							display="flex"
							href="https://www.facebook.com/CarServiceMx"
							position="static"
							align-items="flex-end"
						>
							<Image src="https://uploads.quarkly.io/64ceb8018bd7e600185c43a3/images/facebook%20logo.png?v=2023-08-09T18:38:53.739Z" display="block" width="50px" />
						</LinkBox>
					</Override>
					<Override slot="Cell 0th" position="relative" />
					<Override slot="Cell 1st" height="65px" />
				</Override>
			</Structure>
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