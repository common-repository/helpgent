<?php

declare (strict_types=1);
namespace HelpGent\DI;

use HelpGent\Psr\Container\ContainerExceptionInterface;
/**
 * Exception for the Container.
 */
class DependencyException extends \Exception implements ContainerExceptionInterface
{
}
